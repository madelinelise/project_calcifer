Before we have a look at building agents,
I do want to show you another very common
use case of using chat flows. This
project might not be the
most fancy of projects,
but this is a super common use case of
using large language models, and it's
definitely a skill that
you need to learn. At some point, you
will be expected to work
with unstructured data.
Now that could be pretty much anything.
It could be a simple sentence, or
something complex like
an invoice. For example, this example
invoice that contains the company
information, the clients
details, the invoice items, the invoice
number, and the total
amounts. So in your project,
you might be expected to extract certain
information from a document like this,
and that's very hard to do using
traditional coding methods. But
thankfully, large language
models are very good at making sense of
the content of this
document, and by the way,
it doesn't have to be a PDF document. We
can upload images like
screenshots and JPEG images
as well. And we can then ask the large
language model to extract certain
information. But more
importantly, is we do want to return that
information in a very
specific format. Let's
have a look at how we can build this.
Back in Flow-wise, let's
create a new chat flow,
and let's call it invoice analyzer. Let's
save this, and let's
start by adding a new node,
then under chains, let's add an LLM
chain. This chain takes
in a large language model,
we can also assign a prompt template. But
more importantly, we can
also assign an output parser.
So it's this output parser that will
allow us to specify the exact output in
which we expect this
response. Let's start by assigning our
large language model. So
let's go to chat models,
and I'll add the chat open AI node. I'll
select my credentials, I'm
going to leave it on GPT40
mini, I'll set the temperature as
something like 0.2, because I don't want
to give this model too
much creativity, and let's attach this to
our chain. As I mentioned
earlier, we can also upload
images simply by enabling this toggle.
But do take note that if you
do want to use image uploads,
then you do need to select a model with
vision capabilities. So for
open AI, that would be the
GPT4 vision preview model. I'll simply
disable this for now. And now let's add
our prompt template.
So under prompts, let's add a prompt
template. And let's also go
ahead and attach this prompt
template to our chain. Now we can use a
prompt template to provide
additional instructions to
our model. It's almost like the system
prompt on the chat models.
Now for the prompt template,
we can actually expand this, and let's
add some instructions. So
let's have a look at this. From
this invoice, I actually want to extract
the invoice number. Let's
also extract something like
the customer number. And let's also
extract the gross amount,
including that. So all we have to
do is say something like extract the
following information from
the provided invoice. And that
would be the invoice number. Let's also
extract the customer
number. And finally, we can also
extract the gross amount, including that.
If we simply run this
chat with this information,
the large language model actually won't
have a view of the invoice.
So in order to include the
invoice content within this prompt, we
need to use a variable. Let
me show you how that works.
So we can say something like invoice
content. And now we can inject any
content into this prompt by
using curly braces. And within these
curly braces, we can enter any variable
name like invoice. Let's
save this. And now let's click on format
prompt values. Now we can
see that variable name, and
we can assign a value to this variable by
clicking on edit. When we
click on this box, we can now
attach any value to this variable, like
the user's question. And that's
effectively the question from
the chat window. We can also assign the
chat history. And what
we're looking for is the file
attachment. Let's select this option and
let's close this pop up. We
can save this chat flow. And
if we open the chat window, we won't see
any option to upload a file
yet. That is because we need to
go to settings, configuration, file
upload, and let's enable file
uploads. We can now save this,
close the pop up, and now in the chat
window, we do have the ability
to upload files. So I'm going
to upload a PDF file example. And by the
way, any invoice will work. You can
simply go on Google and
just search for sample invoice PDF. Now
let's simply say something
like hello. And it really
doesn't matter what we send. We simply
want to trigger this chain.
And in the response, we get
the invoice number, which seems correct.
We get the customer number
as 12345, which also seems
correct. And for the gross amount,
including that it should be 45353, which
it is now the intent of
building these type of chains is for this
chain to be called from
outside of flow wise by some
external system to extract this
information. And then that system can do
additional things like
maybe output this information in a report
or use it downstream. So
simply returning freeform text
like this will not be very useful. But
thankfully, we can force that
response to be consistent by
using an output parser is going to add
nodes, then go to output
parsers. And here we have a few
options. We can return the response as a
CSV output. We can return
it as a list, a structured
output parser or an advanced structured
output parser. Let's add
the structured output parser.
I'm going to enable auto fix as that
seems to give the best
possible response. Then within
additional parameters, we can set the
exact values that we'd like to return. So
let's add a new item.
And let's call this first one invoice
underscore number, which is
off type number. And for the
description, we can enter something like
the invoice number, the
large language model will use
this description to figure out how to
extract that information from the
document. Let's add a new
item. Let's call this one customer
number, which is also off type number.
And for the description,
let's enter the customer number. And
finally, let's add one more
field, let's call this gross
amount, including that and for the type,
let's select number. And in the
description, let's say
the gross amount, including that cool.
Now let's attach the output
parser to our chain, like so,
it's saved the flow. And in the chat
window, let's upload our file, let's say,
go, we now receive a
JSON structure. And these field names
will be consistent every
time we call the service and the
values follow the exact types that we
defined. For example, the gross amount
now simply returns the
amount itself without the currency. If we
wanted to return the
currency as well, we could simply go
to additional parameters. Let's add
amount currency, let's change
the type to string. And for the
description, let's enter the gross amount
currency. Let's save this,
let's run this again. So I'll
clear the chat. Let's upload the file and
let's say go. And this time,
we also get the currency back.
Now these type of flows can actually be
incredibly powerful. You
don't have to necessarily
extract information from an invoice for
this to make sense. You
can use the same chain to
build sentiment analysis workflows. You
can classify different
documents based on the
content within those documents, etc. Now
it's time to move on to the next project.
