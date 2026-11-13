# v0.4.0

refactoring render horizontal-paddings

added terminal width check: now the timer doesn't crash (negative number) after changing the window when the task or the timer doesn't fit new width

test config and bell

preparing package.json for publication

additional args added: version, help

# v0.3.1

refactoring the timer code to promises


# v0.3 - 13kb

added total number timers in **log**

architecture optimization

the question about **session success** no longer appears if no **task** is set.

fix value for key "time" in timer.ts 

timer logic has been rewritten: it is now tied to Date.now()

added pause logic to the timer on **space**

additional control for the timer has been added: **q** abort program immediately, **enter** end the timer immediately

### from roadmap

[X] Add pause

# v0.2 - undefined

added paddings to a task

time is now centered

added checkbox "completed"

a DB for timers has been created; now you can view all previously launched timers using the **log** command.
```
overterm log
```

need fix output check. Navigate is broken for elements below 6
need fix value for key "time" in timer.ts 

### from roadmap

[X] Link the countdown to the attached description

[X] Mark assigned tasks as "completed" when finished within the allotted time

# v0.1 - 5kb

basic functionality

### from roadmap

[X] Countdown from the selected time

[X] Graphical representation of the timer