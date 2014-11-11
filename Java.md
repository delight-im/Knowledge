# Java

 * Always use `@Override` annotations when overriding a method. Due to typos or implementation changes you could end up inadvertently adding a new method instead of overriding an existing one, otherwise. Let your IDE show warnings for methods that you have not marked with `@Override`.
 * Always make methods static when possible, i.e. when they don't access instance variables and methods. Let your IDE show warnings for methods that should be made static.
 * When classes have supertypes, they use `extends`. Likewise, when interfaces have supertypes, they use `extends`. Only when a connection crosses the line from interfaces to classes, the class `implements` the interface.
