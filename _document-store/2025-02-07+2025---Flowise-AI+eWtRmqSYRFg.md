this project is actually going to be
super quick and that's by Design in the
previous projects we created this
research assistant that has access to a
couple of tools for instance search API
that allows the agent to go online and
retrieve real- time data we also created
this customer support agent which has
access to a custom knowledge base now
these are such common scenarios that
flow wise created a super simple way of
setting all this up without having to
write code or even dra notes onto a
canvas let's go to assistant let's click
on custom assistants let's create a new
assistant and let's give it a name like
Oak and Barrel support now instead of
building our agent in a canvas we can
simply fill out a few fields on this
form and everything will be done for us
let's start by selecting our model and
for this we'll use chat open AI then I'm
going to grab the same system prompt
that be used in our customer support
agent so I'll just go back to this place
this prom Now watch how easy it is to
assign the document store we simply
select it from this dropdown and we can
then describe this knowledge Base by
effectively copying the same retrieval
prompt that we used here like so then
for the AI model we do have to specify
our credentials we also have to select
our model which will leave as GPT 40
mini is change the temperature to 0.6
and since we've now connected our model
we can actually use this generate button
to generate this text for us so let's
click on this and now we've used an llm
to clean up this description scrolling
down we can also allow image uploads and
set the image resolution but what I'm
interested in is this tool section so to
add tools we can simply click on ADD
tool and select our tool from the
drop-down let's select the Ser API tool
let's select our credentials and if we
wanted to we could add more tools let's
save this assistant and now when we
scroll up we have this preview window
which we can use to test this out as
with chat flows we can still click on
API endpoints and we get the snippet to
embed this assistant into websites we
can call it from Python and everything
else making this a super efficient way
to build assistance
