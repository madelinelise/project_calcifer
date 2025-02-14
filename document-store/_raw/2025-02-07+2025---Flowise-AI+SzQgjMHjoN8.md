Finally, let's have a look at deploying
Flowwise to our very own cloud service.
This option can be cheaper than the
official Flowwise cloud
service, and in the documentation,
you can see all sorts of articles for
deploying Flowwise to AWS,
Azure, and many other service
providers.
I've personally used Render for my
Flowwise instances, and
these instances I've been running
for nearly two years without any issues.
So for this tutorial, I will also
recommend going with Render.
So first, go over to render.com and
create a free account.
Then from your dashboard, click on Add
New, then Add a Web
Service, and from this page,
you will be asked to
connect to your GitHub repository.
So go over to GitHub.com and
sign up for a free account.
Then in the description of this video,
you will find a link to
the Flowwise repository
on GitHub.
Open up this page, then click on Fork,
leave everything on the
default values, and click
on Create Fork.
This will create a copy of the Flowwise
repository in your very own namespace.
So back in Render, you should see an
option to connect to
GitHub repo, so go ahead and
do that, and in the list of repositories,
select Flowwise AI,
then click on Connect,
then give your web service a name.
And because I already have an instance of
Flowwise deployed,
I'll just call this one
Flowwise AI Tutorial.
In scrolling down, we can leave the
language as Docker, leave
the branch as Main, and then
under the instance type.
With a free plan, your flows won't be
persisted, and you will
lose all of your work when the
server is restarted.
So it might be perfect for following
along with this tutorial, but I
definitely recommend
upgrading to the starter package if you
do want to continue
working with Flowwise.
But for now, we'll simply
start with a $7 per month package.
Scrolling down, we can also add
environment variables.
For the first variable, let's create a
variable called
Flowwise_username, and let's set our
username value.
I'll simply call mine admin.
Let's add another variable for the
Flowwise password, and
I'll simply enter the password
as password123.
I would suggest that you use something
way more secure than this.
Let's add a few more variables.
Let's set the port as 3000.
Let's add another variable for the node
version, which we can set as 18.18.1.
Now, the following variables are not
needed if you are using
the free plan, but if you
do want persisted storage, in other
words, you don't want to
lose your flows whenever
the server is restarted, we can go ahead
and add the following variables.
Let's set the API key path as slash opt
slash render slash dot Flowwise.
Let's add another variable for the
database path, and this
is the exact same value as
the API key path.
So I'll simply copy this value as we will
be using it a few more times.
Let's add another variable for the log
path, which we'll also
set equal to this value,
but we'll also add slash logs.
Let's add one more variable, and this is
the secret path with
the value of opt render
dot Flowwise.
I know that was tedious,
but we are nearly done.
All we need to do now is to attach the
drive or the volume.
Let's go to advanced, then under disk,
let's click on add disk.
And for the mount path, we're pasting
that same value that we used earlier.
And for the disk size,
I'll simply go with one gig.
And believe it or not, but we are done.
We simply click on deploy web service.
The deployment will take
a few minutes to complete.
And we're now live.
Great.
So all we have to do to access Flowwise
is to click on this URL,
and we will be prompted
for a username and password, which we set
as admin and password 123.
And we can now access Flowwise.
So do take note that if you self host
Flowwise, the
responsibility to keep Flowwise up to
date falls with you.
But thankfully, that's super easy.
Flowwise is constantly adding new updates
and fixes to their main GitHub repo.
This text is currently saying that this
branch is up to date.
But if you are behind, it will say
something in the lines of
this branch is behind a certain
amount of commits.
All you have to do in that example is to
click on sync fork, and
there will be a button here
that will allow you to update your fork.
In fact, let me show you an example from
another repo, like this
innate end fork that I have.
So this innate end instance is sitting
within my own namespace.
And here we can see that this is actually
28 commits behind the
main innate end repo.
So when I go to sync fork, I can simply
click on update branch.
So now it's saying that this branch is up
to date with the
innate end master branch.
And if I go back to my render dashboard,
we can see that my
innate end instance is now
being redeployed with those new changes.
For the remainder of this tutorial, I
will be using a local
instance of Flowwise.
There is a bonus section towards the end
of the course where
we'll integrate Flowwise
with Telegram.
And for that, we won't need a cloud
instance of Flowwise.
But for everything else, we will be using
the local instance of Flowwise.
But of course, you can follow along using
the cloud instance as well.
