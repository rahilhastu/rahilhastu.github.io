#!/bin/bash

# Specify the directory containing the files
directory="."  # Replace with your actual directory path

# Go to the directory
cd "$directory" || exit

# Loop through files matching the pattern and rename them
for file in pm[0-9]*.*.csv; do
  # Extract the number part from the file name using a regular expression
  if [[ "$file" =~ pm([0-9]+)\..+\.csv ]]; then
    number="${BASH_REMATCH[1]}"  # Get the captured number from the regex match
    new_name="pm$number.csv"
    
    # Rename the file
    mv "$file" "$new_name"
    
    echo "Renamed $file to $new_name"
  fi
done

echo "Done renaming files."
