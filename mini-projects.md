Canopy Mini Projects
----------------------

# Overview

This documents breaks down the work that needs to be done into a bunch of "mini
projects".  Use this document to gain background info on remaining project
tasks.


# canopyEMBEDDED Mini Projects

### SDDL Parsing
SDDL (Smart Device Description Language) is our JSON-based file format that
describes the sensors and controls supported by a device.  We have started
writing C code to parse SDDL files into internal C structures, but it still
needs a lot of work.

Tasks:
 - Review the existing SDDL parsing code in canopy_sddl.c and the JSON parsing
 code in red_json.c.
 - Fix the code so that all SDDL datatypes are supported.
 - Fix the code so that parsing errors are reported to the caller.  Get rid of
 "asserts".
 - Fix RedJson so that it does not leak memory like crazy.
 - Write unit tests for the SDDL parsing routines.
 - Work closely with the SDDL working group to continue to define the SDDL
   spec, and update your code accordingly.

### Websocket Code
The canopyEMBEDDED code uses websockets to community with canopyCLOUD.  We have
started implementing the ws client using libwebsockets, but a lot of work remains.

Tasks:
 - Review the existing WS client code in canopy_ws.c.
 - Properly handle all WS events.
 - Work closely with the PROTOCOL working group to define the canopy websocket
 protocol.
 - Ensure that the implementation conforms to the latest draft of the
 canopyPROTOCOL specification.
 - Fix bugs and memory leaks in the websocket code.
 - Write unit tests for the WS code.

### Event Loop
The canopyEMBEDDED code is based on an event loop with registered callbacks.
The design and implementation details of this event loop are still in their
infancy.

Tasks:
 - Review the existing event loop code in canopy.c.
 - Help define the event loop mechanism in canopy.h.
 - Implement the agreed upon event loop mechanism.
 - Write unit tests for the event loop code.

### Error Reporting
Currently the error handling code in canopyEMBEDDED leaves much to be desired.

The libcanopy API should have a unified approach to error reporting.

Tasks:
 - Review the existing code in canopy\*.c and canopy.h.
 - Propose changes to canopy.h that would provide a consistent error-reporting
 mechanism (something similar to glError that OpenGL uses, perhaps).
 - Once agreement is reached, update the canopy C code to use the new error
 reporting approach.
 - Remove all asserts in the code.

### Makefiles/Build System
The current "build system" consists of a very primitive makefile that was
thrown together.

Tasks:
 - Review the existing makefile.
 - Propose an improved makefile or system.  Perhaps autotools or cmake based?
 - Propose a release process for creating release binaries.
 - Implement the imporved build system and release process.

### Valgrind & fix memory leaks
The current code leaks memory like mad.

Tasks:
 - Familiarize yourself with the current codebase.
 - Run valgrind on libcanopy.
 - Start fixing reported issues.

### libcanopy documentation
The file canopy.h requires documentation.

Tasks:
 - Familiarize yourself with the current codebase.
 - Add thorough documentation to each routine and datatype in canopy.h.
 - (optional) Create man pages for each routine in canopy.h
 - Create web tutorials and documentation for canopy.h.

### Unit testing
The libcanopy library needs unit tests.

Tasks:
 - Familiarize yourself with canopy.h.
 - Implement unit tests of each routine in canopy.h
 - Run coverity to determine code coverage.
 - Add more unit tests to reach 100% code coverage.

# canopyCLOUD Mini Projects

# canopyAPP Mini Projects

# SDDL Mini Projects

# canopyPROTOCOL Mini Projects

# canopy REST API Mini Projects

# Business-side Mini Projects

# Social/Community Mini Projects

### discourse.org forum for project.

### Twitter and Facebook

### Blog
