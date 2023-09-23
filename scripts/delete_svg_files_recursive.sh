delete_svg_files_recursive() {
  local directory="$1"

  # Check if the directory exists
  if [ -d "$directory" ]; then
    # Use the 'find' command to locate all .svg files in the directory and its subdirectories, and delete them
    find "$directory" -type f -name "*.svg" -exec rm {} \;
    echo "SVG files deleted in the directory and its subdirectories: $directory"
  else
    echo "The directory does not exist: $directory"
  fi
}

# Usage of the function: call delete_svg_files_recursive with the desired directory path
delete_svg_files_recursive "$1"
