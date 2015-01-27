# Eclipse

## Exporting Android projects as "fat" JARs with dependencies

 1. Go to one of the `.java` files in your project's package
 2. Add `public static void main(String[] args) { }` somewhere (will be deleted again later) and save the file
 3. Open the "Run as ..." drop-down menu and choose "Run Configurations"
 4. Right-click on the "Java Application" item in the list on the left and choose "New"
 5. Enter a name, usually your project's name
 6. Choose your project by clicking "Browse ..."
 7. Choose *any* of your classes (usually there will only be the one we have edited above) as the "Main class" by clicking "Search ..."
 8. Save the configuration by clicking "Apply"
 9. Remove `public static void main(String[] args) { }` from step two again
 10. Right-click your project and choose "Export ..."
 11. Open section "Java" and choose "Runnable JAR file"
 12. Choose your new launch configuration and some new file `<YOUR_PROJECT>.jar` as the export destination
 13. Click "Finish" and be prepared to ignore *some* warnings
