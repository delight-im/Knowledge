# Windows

 * In most applications, you can copy things (files, text, images, etc.) with `Ctrl+C` and paste them somewhere else with `Ctrl+V`.
 * If you want to move things (files, text, images etc.) instead of copying them, use `Ctrl+X` and `Ctrl+V`.
 * Lots of applications allow you to undo things with `Ctrl+Z`.
 * The program that you view websites with is called `web browser`, or just `browser`.
 * Some good free web browers are Google Chrome, Mozilla Firefox and Safari.
 * If you want to write simple texts without formatting and design, use Windows' Editor or WordPad instead of complex Microsoft Word etc.
 * You can take a photo of the full screen by pressing the `Print` button (screen capture). Afterwards, paste the image (`Ctrl+V`) somewhere.
 * For basic graphics editing, the free Paint.NET is very good. For more complex work, try the free Gimp or commercial Adobe Photoshop.
 * In order to pack and unpack collections of files or archives, use the free 7-Zip.
 * In order to start the command prompt for a certain location quickly, just navigate to the desired folder in `Explorer`. Then press `Shift` and right-click on the background of the `Explorer` window. You should be able to launch the command prompt by clicking `Open command window here` then.
 * If you want to have a file name start with a dot (`.`), it works only if you add another dot at the end of the file name as well. The trailing dot will be removed automatically.
 * In order to create a file without a file extension (e.g. `LICENSE`), just type the desired file name and append a trailing dot. The void in the place of the file extension causes the file to be created without an extension.
 * If you want to use cURL from the command line, you should just get Git for Windows which includes GNU Bash.
 * If you don't want GNU Bash from Git for Windows to save a history of the most recent commands, this can be prevented easily: In your user directory, i.e. `%USERPROFILE%`, create (or append to) a file named `.bashrc`. Put `HISTFILESIZE=0` in a new line and save the file.
 * If you want Notepad++'s search (and replace) history of recent entries to be cleared (or at least trimmed) whenever you exit the program, this can be easily done in its configuration files: Open `%APPDATA%\Notepad++\config.xml` with `notepad.exe` (!). In that file, find the opening `FindHistory` tag. Among that tag's attributes, change `nbMaxFindHistoryPath` and `nbMaxFindHistoryFilter` from `10` to `1`, and `nbMaxFindHistoryFind` and `nbMaxFindHistoryReplace` from `10` to `0`. You may enter any values you like, but these are reasonable defaults for clearing the lists.

## Keyboard shortcuts

 * `Ctrl` + `A`: select all items in a list, select the full text in a text field, select the full image in an image editing application
 * `Ctrl` + `C`: copy the selected content
 * `Ctrl` + `V`: paste the most recently copied content
 * `Ctrl` + `X`: cut out (as opposed to copying) the selected content so that it will be relocated and not copied while pasting
 * `Print`: copy a screenshot of the full screen (may be pasted in an image editing application, for example)
 * `Tab`: jump to the next control or input field
 * `Shift` + `Tab`: jump to the previous control or input field
 * `Ctrl` + `Z`: reverse the latest action
 * `Ctrl` + `Y`: repeat (un-reverse) the latest action
 * `End`: jump to the end of the current line in an input field
 * `Pos1`: jump to the beginning of the current line in an input field
 * `Alt` + `Tab`: switch between windows that have been opened
 * `Win` + `D`: switch to the desktop
 * `Win` + `L`: lock the computer
 * `Ctrl` + `Alt` + `Del`: open the task manager (e.g. to force an application to be closed)

## PowerShell

 * Run `ii .` or `explorer.exe .` to open an explorer window for the current directory.

## Java

 * If you use the `java` command to run a program and want UTF-8 output on the console, add the option `-Dfile.encoding=UTF-8`.

## Extracting the license key from an existing Windows installation

On the same computer, i.e. with the same hardware and drives present, boot from a Ubuntu live DVD. Then open a terminal window and run the following command:

```bash
$ sudo cat /sys/firmware/acpi/tables/MSDM | strings
```

Alternatively, having located the Windows drive in Ubuntu’s file manager (“Other Locations”), you may try the following set of commands:

```bash
# sudo add-apt-repository universe
# sudo apt-get update
# sudo apt-get install chntpw
$ chntpw -e /path/to/drive/Windows/System32/config/SOFTWARE
$ dpi \Microsoft\Windows NT\CurrentVersion\DigitalProductId
```

## Detecting DNS resolver (recursive DNS server) used by local machine

```
nslookup -type=TXT whoami.ds.akahelp.net
REM or
nslookup -type=A whoami.akamai.net
```

## Saving screenshots, screen captures or thumbnails from a video file

```
vlc.exe <VIDEO_FILENAME> --start-time=<START_TIME_SECONDS_OR_MINUS_1> --stop-time=<STOP_TIME_SECONDS_OR_MINUS_1> --rate=<PROCESSING_SPEED> --video-filter=scene --vout=dummy --aout=dummy --scene-format=<IMAGE_FORMAT> --scene-ratio=<CAPTURE_EVERY_NTH_FRAME> --scene-width=<IMAGE_WIDTH> --scene-height=<IMAGE_HEIGHT> --no-scene-replace --scene-prefix=<IMAGE_FILENAME_PREFIX> --scene-path=<IMAGE_OUTPUT_PATH> vlc://quit
REM e.g.: vlc.exe "input.mp4" --start-time=-1 --stop-time=-1 --rate=1 --video-filter=scene --vout=dummy --aout=dummy --scene-format=png --scene-ratio=30 --scene-width=-1 --scene-height=-1 --no-scene-replace --scene-prefix=thumb_ --scene-path=./thumbs vlc://quit
REM e.g.: vlc.exe "input.mp4" --start-time=24 --stop-time=2397 --rate=1 --video-filter=scene --vout=dummy --aout=dummy --scene-format=png --scene-ratio=300 --scene-width=1920 --scene-height=1080 --no-scene-replace --scene-prefix=thumb_ --scene-path=./thumbs vlc://quit
```

## Wiping or overwriting unallocated (remaining free) disk space

Download “SDelete” from Sysinternals [here](http://web.archive.org/web/20140902022253/http://download.sysinternals.com/files/SDelete.zip) or [here](https://docs.microsoft.com/en-us/sysinternals/downloads/sdelete). Then use it to write zeros to drive “C:” until it’s filled completely:

```
sdelete -z c:
```

## Finding the IP addresses of all devices connected to the local network (LAN)

```
for /L %i in (1,1,254) do ping -4 -n 1 -w 1000 192.168.0.%i | findstr -l -i "bytes=32"
```
