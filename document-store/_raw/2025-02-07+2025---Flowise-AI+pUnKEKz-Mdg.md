Now before we create our very first chat
flow, let's have a
look at the Flowwise UI.
The first thing I like to do after
setting up Flowwise
is to enable dark mode,
as I hate blinding myself or my audience.
On the left hand menu, we have different
options to create chat flows, agent
flows, and assistance.
We will cover each of these options in
the course, but in a nutshell,
we can use chat flows to create things
like conversational chat
bots, AI agents, or assistance.
With agent flows, we can take it a step
further by creating flows
that contain multiple agents
that can work together
to solve complex tasks.
In the assistance menu, we can easily
create assistance which
contain custom knowledge
places and tools by effectively following
a very simple wizard.
So most of the work is done
for you in the background.
Within Marketplace, we can
search for existing templates
that we can simply copy over to our own
namespace and change as we see fit.
So here we can see examples
of document QNI chat bots,
a genetic rag, and a whole
bunch of other very cool examples.
Of course, we will be
creating everything from scratch.
Within the Tools menu, we
can create our very own tools,
or we can also go to the Marketplace and
look for any existing tools,
and then copy these tools
over to our own namespace.
Or if we click on Create, we can create
our very own tools by
writing some JavaScript code.
Within the Credentials menu, we can see
all the credentials that
we've stored in Flow-wise.
These will contain things like our
connection details to OpenAI or
Anthropic, or our vector stores.
So this is a very elegant solution for
maintaining all the
credentials in a centralized place.
We can also set global
variables within a variable menu,
and each of our Flows will
have access to these variables.
Within the API Key menu, we can create
and view our API Keys.
Flow-wise offers a massive list of APIs
that you can call from
outside of the platform
in order to interact with your Flows or
even make changes to your Flows.
And in order to use those APIs, you do
need to authenticate the
API call with an API Key.
Lastly, we can use the Document Stores
menu to create our
very own knowledge bases,
and our AI agents will have access to
these Document Stores.
We will spend a lot of
time in this menu soon.
Before we create any of our chat Flows,
we need to decide on
which large language model
we're going to use for
this tutorial course.
These large language models are
effectively the brains
for these AI chat Flows.
Now, giving you advice on what to use in
this tutorial can be very tricky,
because I know there will be those of you
who are not willing to spend any money
to use services like OpenAI or Anthropic,
and you would prefer
to use free services.
So I will give you some advice on those
free services and what
to use and what to avoid,
but I'm personally going to use OpenAI
during the course of the series.
So for those of you who would prefer to
use free models, this is what you can do.
If you're running Flow-wise locally, and
you have the hardware to do so,
then you can use something called Olama
to run open source models
directly on your machine.
I have a dedicated video on my channel
discussing how to set up
Olama and use it within Flow-wise.
So this is just going to be a brief
explanation on how to do
that, but if you do get stuck,
then check out that video, which I will
link in the description of this video.
But in a nutshell, go to olama.com,
download Olama for your
operating system, and install it.
Then you can go to the models page and
look up a model like Olama
3.2, then copy this command,
open up your command prompt or terminal,
then paste in that
command and press enter.
This will download the model, and
afterwards you should be able to test it
by sending a message.
And this means we can now use this model
in our Flow-wise
applications free of charge,
and this is completely local. If you
don't have the hardware to
run those models locally,
then I highly recommend using Grok. This
service is also free to use,
and this also allows you
to run open source models.
To set this up, go to
grok.com and click on dev console.
From here, go to API keys, create a new
key, give it a name
like Flow-wise tutorial,
click on submit, copy this key, and back
in Flow-wise, go to
credentials, click on add
credential, search for Grok, select Grok
API, paste in that key,
and we can just give this
credential a name like Grok API. And
let's click on add. But I do want to
mention that Grok does
give you access to open source models
like Lama 3.3. Now I do want
to mention the caveats with
using these free open source models. The
first caveat is with Olama, and
specifically this Lama
3.2 model. Yes, Olama also has support
for Lama 3.3, however,
this is a massive model,
and it's about 43 gigs to download. The
chances are that the
majority of you will not have the
hardware to run this model, so you will
pretty much be limited to
run Lama 3.2 to 3 billion
parameter model. Most hardware will be
able to run this model. These small
models are more than
capable of handling things like chatbots
or very simple agents,
but once we start building
multi-agent flows, you will run into
issues. For the multi-agent flows, I
definitely recommend a
way more intelligent model like the Lama
3.3 model, in which case
you might want to use Grok
instead. However, Grok comes with its own
shortcomings. In
order for Grok to be free,
they have to enforce rate limiting. So
it's very possible that
your flow will just simply stop
working because you've technically hit
your rate limit. So as
much as people don't like
hearing this, I do recommend using a paid
service like Anthropic or OpenAI for
learning how to build
AI applications. It's just not worth it
in my opinion to try and get
some free model to function
as opposed to simply learning how to
build these applications
without all that friction. So what I
recommend you do is go to
platform.openai.com and sign up for an
account. You will need to load
some credit onto your account. So all you
have to do is go to your
profile, click on billing, and
then add some credit to your account.
This can be as little as $5.
Then once you've added some
credit, go back to your dashboard, click
on API keys, click on
create new secret key. Let's give
it a name like flow wise tutorial. Let's
click on create secret key.
Let's copy the key. Then back
in flow wise, let's add the credential.
Let's search for OpenAI.
It's based in the API key.
And let's give our credential a name like
OpenAI API. So I'll
show you how to get the
Anthropic API key as well. Go to
Anthropic.com slash API and click on
start building. You can
then sign into your account or create an
account. And this might have
changed as well, but I think
Anthropic might give you free credit. But
if they don't, simply
click on your profile, click on
billing, and you can add credit from the
screen by completing the
setup. And as you can see,
I still have credit left without having
to complete my setup
process. So I suspect they
do give you free credit. And for some
reason, this credit lasts a very long
time. Once you have some
credit loaded, go back to your dashboard,
click on get API keys,
click on create key. Let's give
it a name like flow wise tutorial. Let's
copy this key. Then back in flow wise,
let's add credential.
Let's search for Anthropic API. It's
based in that key. And for
the name, I'll just call it
Anthropic API. I suggest just picking one
of these. Maybe you can start
with Grok because it is free.
And the moment you run into issues,
consider signing up for
Anthropic as I think they might
give you free credits, or alternatively,
add some credit to your
OpenAI account and use your OpenAI
models instead. Now that we have a large
language model credential
setup, we can go ahead and build
our very first flow wise project.
