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

### Verifying CDs and DVDs against source ISO images

The checksum for an ISO image can easily be calculated in the standard way:

```bash
sha256sum ISO_IMAGE_PATH
```

However, calculating a checksum of a *CD* or *DVD* using

```bash
sha256sum /dev/cdrom
```

usually does not produce the expected result due to trailing blank space on the disk. Instead, you should detect the exact size of the ISO image in bytes and then run the following:

```bash
dd if=/dev/cdrom bs=1 count=ISO_IMAGE_SIZE_BYTES | sha256sum
```

You can speed this up by finding a larger proper divisor of the size in bytes, such as 2048, 2324 or 2336, and then using that for the `bs` argument while dividing the `count` argument by the same number.
