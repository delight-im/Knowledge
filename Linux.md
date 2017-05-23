# Linux

## Bash

### Text processing and string manipulation

 * Converting standard input's text to uppercase:

   ```bash
   tr "[:lower:]" "[:upper:]"
   ```

 * Converting standard input's text to lowercase:

   ```bash
   tr "[:upper:]" "[:lower:]"
   ```

### Universally unique identifiers (UUIDs)

 * Generating random UUIDs (i.e. UUID v4):

   ```bash
   uuidgen -r
   ```

 * Generating UUIDs based on the current date and time and on the local machine's MAC address (i.e. UUID v1):

   ```bash
   uuidgen -t
   ```
