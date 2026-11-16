```
                                    M""""""""M MM""""""""`M MM"""""""`MM M"""""`'"""`YM 
                                    Mmmm  mmmM MM  mmmmmmmM MM  mmmm,  M M  mm.  mm.  M 
.d8888b. dP   .dP .d8888b. 88d888b. MMMM  MMMM M`      MMMM M'        .M M  MMM  MMM  M 
88'  `88 88   d8' 88ooood8 88'  `88 MMMM  MMMM MM  MMMMMMMM MM  MMMb. "M M  MMM  MMM  M 
88.  .88 88 .88'  88.  ... 88       MMMM  MMMM MM  MMMMMMMM MM  MMMMM  M M  MMM  MMM  M 
`88888P' 8888P'   `88888P' dP       MMMM  MMMM MM        .M MM  MMMMM  M M  MMM  MMM  M 
                                    MMMMMMMMMM MMMMMMMMMMMM MMMMMMMMMMMM MMMMMMMMMMMMMM 
```  

Terminal ASCII timer with tracking of completed work. **Lightweight**, **ASCII**, **time**. This is a tiny terminal timer designed to track time spent on tasks. It does not specifically use any third-party libraries, and the architecture is designed to consume as little resources as possible. The timer is visualized using ascii art, with each digit rendered using a custom engine. Time does not depend on the interval, but is calculated exclusively from Date.now()

https://github.com/user-attachments/assets/a1687ce0-29e0-4d28-9453-a86186ded0b3

## Getting started
Installation is very simple, using the npm package manager.

```
npm install overterm
```

Starting a timer for 10 seconds with a set task.
```
overterm -s 10 -t "hello world"
```
pause: **space** | end timer: **enter** | abort: **q**

View past timers with set task.
```
overterm log
```
navigate: arrows **up/down** | abort: **q**

## Arguments
```
usage: 
    overterm 
        [-s | --seconds] number >= 0
        [-m | --minutes] number >= 0
        [-H | --hours] number >= 0
        [-t | --task] string
        [-v | --version]
        [-h | --help]
        [--config] 

subcommand:
    log         displays the last timers that had a task set
```

## Development

- clone a repository
- npm install
- npm build

## Roadmap

[X] Countdown from the selected time

[X] Graphical representation of the timer

[X] Link the countdown to the attached description

[X] Mark assigned tasks as "completed" when finished within the allotted time

[X] JSON database for storing all timers and their descriptions empty timers should not be saved

[ ] Select timers from the most recently recorded timers

[X] Add config

[X] Add pause

[ ] Fix flickering terminal

[ ] Write a README

## Licence
MIT
