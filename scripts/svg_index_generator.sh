#!/bin/bash

# Root folder path where SVG files will be searched
root_path="./"
# Function to process an SVG file
# Arguments:
#   $1: Path to the SVG file to process
process_svg_file() {
  local file="$1"
  local file_name_without_extension=$(basename "$file" .svg)

  file_name_without_extension=$(echo "$file_name_without_extension" | sed 's/-\([a-z]\)/\U\1/g;s/^[A-Z]/\L&/')
  file_name_without_extension=$(echo "$file_name_without_extension" | sed 's/-//g')

  line_one=$(cat "$file" | grep -o '<path[^>]*>' | awk -F '<path' '/<path/ {print $2}' | awk -F '/>' '{print $1}' | awk '{gsub(/="/, ":\""); gsub(/" /, "\", "); gsub(/"$/, "\""); print $0}' | head -n 1)
  line_two=$(cat "$file" | grep -o '<path[^>]*>' | awk -F 'd="' '/<path/ {print $2}' | awk -F '"' '{print $1}' | tail -n +2 | tr '\n' ' ')

  parent_dir="$(dirname "$file")"

  parent_dir_with_root_path="${parent_dir#"$root_path/"}"
  parent_dir_with_root_path="${parent_dir#"./"}"

  index_file="$parent_dir/index.ts"

  if [ -e "$index_file" ]; then
    echo "Updating $index_file"
    echo "  $file_name_without_extension: {" >>"$index_file"
    echo "   wp:{$line_one}," >>"$index_file"
    echo "   d:'$line_two'," >>"$index_file"
    echo "  }," >>"$index_file"
    sed -i 's/};//' "$index_file"
    echo "};" >>"$index_file"

  else

    echo "Creating $index_file"
    echo 'import { fill } from "./fill";' >>"$index_file"
    echo 'import { line } from "./line";' >>"$index_file"
    echo "export const $parent_dir_with_root_path = {" >>"$index_file"
    echo "  ...fill," >>"$index_file"
    echo "  ...line," >>"$index_file"
    echo "  $file_name_without_extension: {" >>"$index_file"
    echo "   wp:{$line_one}," >>"$index_file"
    echo "   d:'$line_two'," >>"$index_file"
    echo "  }," >>"$index_file"
    echo "};" >>"$index_file"
  fi

}

svg_files=$(find "$root_path" -type f -name "*.svg")

for file in $svg_files; do
  process_svg_file "$file"
done
