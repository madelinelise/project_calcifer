with multi-agents we were able to assign
a supervisor node and the supervisor was
able to intelligently delegate tasks
between our different worker agents one
thing to keep in mind with this approach
is that we are relying on the supervisor
to make the right decisions we could try
to force the sequence of events by
changing the system prompt in the
supervisor node but if we really wanted
fine tune control we could instead use
sequential agents let's see how that
works let's go back back to the
dashboard make sure that you are on
agent flows then click on add new and
for this project we'll create a content
creator agent this agent will be able to
go online and retrieve some upto-date
information and then write an article or
a blog post or an X poost or whatever we
want however it doesn't end there after
this agent has written the post we want
a reviewer to review that post and
suggest additional changes and we want
that review process to run about three
times this will greatly improve the
final output let's start by saving our
flow and let's call this content
creation theme and let's save this we
can create sequential agents by going to
add nodes then we can scroll past
multi-agents and instead we will use the
notes in the sequential agents menu I do
want to mention that sequential agents
are incredibly powerful and it's pretty
much a topic all by itself so this
project will pretty pretty much just dip
our toes in how sequential agents work
but if you want to learn more about
building Advanced applications with
sequential agents then definitely check
out the dedicated videos that I have on
my channel on this topic right so
sequential agents require a starting
node and an end node so let's add our
start node and let's also go ahead and
add the end node so let's scroll down to
sequential agents and let's add this end
node this all makes sense so far right
we we need to start our flow somehow and
end our flow somehow for the start node
we have to specify a chat model so let's
go to add nodes let's go to chat models
and I'll add this chat open AI node
let's attach it to the start node let's
select our credentials let's select the
model name I'll use GPT 40 and I do want
this agent to be creative so I'll just
leave the temperature on 0.9 let's also
assign agent memory as with the previous
videos on agents we can use memory to
have a conversation with our agent this
means that after our agent has generated
the article we can give it followup
instructions to make certain changes to
the article so to assign agent memory
let's simply go to this memory menu and
let's select the SQL light agent memory
node and let's attach this to our
starting node as well we can also assign
state to this flow we won't have a look
at state in this video as I do have
other videos that cover state in great
detail but all the state node allows us
to do is to set certain values in fact
let's quickly add this state node just
to demonstrate this in the state Noe we
can set values and these are effectively
Global variables that are shared between
all the nodes within this flow so we
could as an example set something like
name and for the operation let's select
replace and by default the name could be
an initial value and during the
execution of this flow we might collect
the user's name and then change the
value in This Global State and that
means that all the notes within this
flow will have access to this name
property by default the conversation
history is stored with in a variable
instate called messages with an
operation of aend so initially we won't
have any values within our conversation
history but as this flow runs and as we
send messages to this flow all those
messages will be pended to this messages
variable but flow voice will add this
for us so we don't have to explicitly
add that messages value to state right
but again if you are interested in
learning more about using State then
definitely check out my dedicated videos
on sequential agents now let's get back
to our agent flow let's add an agent
that will be responsible for going
online to perform some research for us
and then write a blog article so let's
go to add notes then under sequence
potential agents let's add the agent
node let's attach the start node to our
agent node and let's attach our agent
node to the end node super simple we can
assign tools and since we want our agent
to be able to go online let's actually
assign the Ser API tool which we already
set up in one of the previous projects
so let's go all the way down to tools
and let's add the Ser API tool and let's
connect it to our agent let's also
select our ser API credentials great now
let's give our agent a name I'll call
this writer I do recommend using
lowercase characters without any spaces
if you do want to add a space then
rather use an underscore between the
words instead now let's set a system
prompt for our author I'll simply
replace this with generate the best blog
post possible for the user's request use
the search tool to perform research if
the user provides critique respond with
a revised version of your previous
attempts let's save this prompt and
let's have a look at the other
properties on this note we can introduce
human in the loop by enabling require
approval this means that before this
agent attempts to call a tool it will
first ask you if it's allowed to proceed
and you can then approve or decline that
request if you do enable require
approval you can then click on
additional parameters and then you can
change the approval prompt as well as
the text for the button butons that will
be displayed to approve or reject the
request but I think this is good enough
for now let's save this flow and in the
chat window let's say write the blog
post on open
ai3 and after a few seconds we get our
article back and we can see that the
Search tool was indeed used and we get
this article back on the open ai3 model
which was recently announced because we
attached memory to this agent we are
able to ask follow-up questions or make
changes to this article for instance
let's say Place more focus on the
negative impact of O3 on the environment
and human job security and our agent
should now use the article that is
written and just slightly change it to
place the focus on these different
aspects so if we go up to our article we
can now see that the article is
definitely way more focused on the
environmental impact and things like
costs and carbon footprint cool we can
greatly improve the quality of our
article by assign in another large
language model to review the article and
to request additional changes for this
application I actually want that review
process to happen three times so it will
basically run in a loop and after the
third attempt we will receive the final
article so instead of jumping directly
to the end Noe we want to conditionally
call the article reviewer and after the
third attempt we will call this end node
so in order to conditionally call nodes
we can go to add nodes then under
sequential agents let's add this
condition node let's attach our agent to
this condition node we can give our
condition node any name this really
doesn't matter I'll just call this if
less than three times like so and we can
now set up our conditions by clicking on
this condition button let's click on add
item and under the variable we can
access all sorts of variables and if we
were using State we could use the values
in the state object but as I mentioned
mentioned earlier the messages so the
conversation history is automatically
added to state by flow wise so we are
able to access the conversation history
in this instance we actually want to
access the messages. length so I'll
simply select that then we can say if
the amount of messages is less than or
equal to six messages then we want to
call the review path so just to explain
this value the output from the writer
note so the post or the article will
count as one message then our reviewer
will provide feedback and that will
count as a second message our writer
will then make changes to the article
based on the feedback from the reviewer
which will count as the third message
and that will then go back for review
and double count as the fourth message
of course the writer will then make
additional changes which will be the
fifth message and then our reviewer will
perform a final review counting as a six
message then our writer will make the
final changes and that means we're now
on seven messages and that will end our
flow let's save this condition and now
we get this end output so let's actually
attach that to our end node over here
and we also have this review output so
now we can use this to call another
agent or a large language model to
review this article let's go to add
nodes under sequential agents we could
use an agent node but since we don't
have to call tools we can actually just
simply use a large language model so
let's attach this llm node let's attach
this review output to our llm node let's
give this node a name like reviewer
under additional parameters we can set
the system prompt which we can set as
you are an editorial reviewer grading a
blog post submission generate crique and
recommendations for the user submission
provide detailed recommendations
including request for length depth style
Etc let's save this let's close this
popup and this note will generate a
review of the article written by the
reviewer now we somehow need to loop
back to the writer note so that the
writer can include all of these changes
so how do we loop back to a different
node that's super easy let's go to add
nodes under sequential agents let's add
the loop node and we can now attach our
LM to the loop node and this will ask us
which node to Loop loop back to all we
have to do is copy the name of the agent
that we want to loop back to and paste
it into this field and I just noticed
that I actually made this an uppercase R
and I do recommend using lowercase
letters instead and this should be it
let's test this Flow by saving it then
in the chat window let's ask it again
write an article on the new open ai3
model and we keep receiving the new
articles with the reviews and this is
running in a loop all right execution
just completed and if we scroll up we
can see the initial article from the
writer then we can see that our
condition note was called which decided
to go to the reviewer output this is the
feedback from the reviewer with its
recommendations which then loop back to
the writer node which then may changes
to the article based on that feedback we
then call the condition node again the
writer then made additional changes and
for the final time we called our
reviewer again with additional feedback
which then led to this final article
being written and now we get the final
output what's really cool about this is
we can see all the tool calls for each
of those Loop iterations and in my
experience this final result is way
better than the initial output from the
model so as I mentioned sequential
agents are really powerful for building
these types of workflows so definitely
check out my other videos on sequential
agents where we built incredibly complex
self-correcting r dag Solutions using
sequential agents
