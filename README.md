##Zetta basestation driver for any platform

###Install

```
$> git clone https://github.com/zettajs/zetta-basestation-driver zetta-{device}-{platform}-driver
```

###Usage

```
var zetta = require('zetta');
var Basestation = require('zetta-basestation-driver');

zetta()
  .use(Basestation)
  .listen(1337)
```

### Hardware

* any platform

###Transitions

#####do(message)

Calls the device's log() function passing the message param.

###Design

This device driver is designed to be the basestation code for other device drivers.
