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

### Reverse lines (in a file)

```bash
$ tac <FILE>
# or
$ echo <STRING> | tac
```

### Reverse characters (in every line of a file)

```bash
$ rev <FILE>
# or
$ echo <STRING> | rev
```

### Cutting a video file using start and end time without re-encoding

```bash
$ ffmpeg -i $INPUT_FILENAME -ss $START_TIME_SECONDS -to $END_TIME_SECONDS -c:v copy -c:a copy $OUTPUT_FILENAME
# e.g.: ffmpeg -i "input.mp4" -ss 412 -to 23910 -c:v copy -c:a copy "output.mp4"
```

### Converting a video file to use a different video and audio codec

```bash
$ ffmpeg -i $INPUT_FILENAME -c:v $VIDEO_CODEC_NAME -c:a $AUDIO_CODEC_NAME $OUTPUT_FILENAME
# e.g.: ffmpeg -i "input.mp4" -c:v libx264 -c:a aac "output.mp4"
```

### Rotating a video file using only metadata changes to prevent re-encoding

```bash
$ ffmpeg -i $INPUT_FILENAME -metadata:s:v:0 rotate=$ANGLE_CLOCKWISE_MULTIPLE_OF_90 -c:v copy -c:a copy $OUTPUT_FILENAME
# e.g.: ffmpeg -i "input.mp4" -metadata:s:v:0 rotate=270 -c:v copy -c:a copy "output.mp4"
```

### Rotating a video file by re-encoding the actual video stream

```bash
# ANGLE_IDENTIFIER="transpose=1" # 90 degrees clockwise
# or
# ANGLE_IDENTIFIER="vflip,hflip" # 180 degrees
# or
# ANGLE_IDENTIFIER="transpose=2" # 270 degrees clockwise

$ ffmpeg -i $INPUT_FILENAME -vf $ANGLE_IDENTIFIER -c:v $VIDEO_CODEC_NAME -c:a copy $OUTPUT_FILENAME
# e.g.: ffmpeg -i "input.mp4" -vf "transpose=1" -c:v libx264 -c:a copy "output.mp4"
```

### Removing sound from a video file by dropping the audio stream

```bash
$ ffmpeg -i $INPUT_FILENAME -c:v copy -an $OUTPUT_FILENAME
# e.g.: ffmpeg -i "input.mp4" -c:v copy -an "output.mp4"
```

### Converting a video file to audio only (e.g. MP3)

```bash
$ ffmpeg -i video.webm -b:a 320K -vn music.mp3
# or
$ for i in *.webm; do ffmpeg -i "$i" -b:a 320K -vn "$(basename "${i/.webm}").mp3"; done;
```

### Wiping or overwriting unallocated (remaining free) disk space

Write zeros to a temporary file named `zero.file`, which will be deleted as soon as the disk has been filled completely:

```bash
cat /dev/zero > zero.file; sync; rm zero.file
```

### Finding the IP addresses of all devices connected to the local network (LAN)

```bash
for ip in 192.168.0.{1..254}; do ping -c 1 -W 1 $ip | grep "64 bytes"; done
```
