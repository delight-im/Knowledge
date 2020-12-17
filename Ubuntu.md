# Ubuntu

## Usage

### Decoding a QR code to text

```bash
# sudo apt-get install zbar-tools
zbarimg --raw <INPUT_IMAGE_FILENAME>
# e.g. zbarimg --raw my-qr-code.png
```

### Encoding a QR code from text

```bash
# sudo apt-get install qrencode
qrencode --size=<SIZE> --margin=<MARGIN> --foreground=<FG_RRGGBBAA> --background=<BG_RRGGBBAA> --output=<OUTPUT_IMAGE_FILENAME> <TEXT>
# e.g. qrencode --size=16 --output=my-qr-code.png "my text"
# e.g. cat my-file.txt | qrencode --size=12 --output=my-qr-code.png
# e.g. echo -n "my text" | qrencode --output=my-qr-code.png
```
