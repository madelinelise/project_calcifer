The Flow Wise AI developers are
constantly adding new and exciting
features to the platform,
so it's important that you keep your Flow
Wise installation up to date.
Although I'm using Windows in this video,
these instructions will
work for all operating systems
as well. In this video, I will show you
how you can update
your Flow Wise instance,
whether you're running it locally or on
render.com. Let me know in the comments
if there are any other
platforms which you would like me to
cover. First, if you
installed Flow Wise using the
instructions on their website, it means
that you installed Flow
Wise globally on your machine.
To update Flow Wise, you can simply open
your command prompt or
terminal and enter npm update
dash g then Flow Wise. You can simply go
ahead and open the command
prompt or terminal and then
enter npm update dash g then Flow Wise.
And your instance of Flow
Wise should then be updated.
If you installed Flow Wise by creating a
local node environment
and then installing it using
something like npm or pnpm, you can
simply update Flow Wise by
navigating to that folder
and opening the terminal. Then all you
have to do is run npm or
pnpm if you use that instead.
Then update and then Flow Wise and that
will update your Flow
Wise package to the latest
instance. Or if you installed Flow Wise
using the developer option,
this is basically where we
copied the repo and ran the commands
install and bold. You can simply open
your Flow Wise folder,
then open the terminal or cd into that
folder. Then in the
terminal, we can pull the latest
updates from the Flow Wise repo by
entering git pull origin
main and this will ensure that
our instance contains all the latest
updates from the repo. Then we can enter
pnpm install and lastly
pnpm bold and after the bold step your
Flow Wise instance will be up
to date. Or if you installed
Flow Wise using the scripts that I wrote
for this tutorial
series and by the way you can
download these for free so check out my
getting started video on
how to access and run these.
But effectively you simply go to this
repo, download the file
for your operating system
and then paste it into a folder on your
machine. And then all you
have to do is execute the file
for your operating system. Like on
Windows I'm using this batch file. To
update Flow Wise all
you have to do is delete the existing
folder and don't worry this will not
remove your flows or data.
And once the folder was removed simply
execute the file again and this will
automatically download
and install and build Flow Wise. And yes
all of your flows and
data will still be there.
If you're using Docker or Docker Compose
then simply navigate to
the Docker folder within
your Flow Wise instance and open the
command prompt or terminal in this
folder. Then we need
to first stop our Docker instance by
typing docker-compose and
then stop. Or you can simply
press the stop button next to your Docker
container. Then in the
terminal let's go back to the main
Flow Wise folder and let's pull the
latest changes from the GitHub repo by
running get-pull-origin
then main. Then let's cd back into the
Docker folder. Then
let's enter docker-compose
up--bold and -d. Let's press enter. Your
Flow Wise instance
will now be up and running
and now it will include the latest
features of Flow Wise. Next
let's have a look at updating
our instance on render. But first if you
enjoyed this video then
please consider subscribing to
my channel and hit the like button. If
you have an instance running
on render which allows you to
access Flow Wise from anywhere in the
world and by the way my instance of Flow
Wise has been running
on render for over a year now without any
issues. So I'm not
sponsored by then but I highly
recommend the service. If you want to
update your instance on render all you
have to do is go to the
fourth version of Flow Wise on your
GitHub account and here you will see a
message stating that this
branch is a certain amount of commits
behind. So thankfully to keep this
up-to-date is very simple.
On the right go to sync fork then click
on update branch. Now you'll see a
message saying that this
branch is now up-to-date with the main
Flow Wise repo and if we go back to
render we will now see
that the instance status changed to
deploying so all the latest
changes are automatically being
applied and once this is done deploying
you will have the latest
version of Flow Wise running in
the cloud. I hope you found this video
useful. If you would like to
learn how to deploy Flow Wise
to render then check out
this other video over here.
