this project we're going to build an
agent that has access to a custom
knowledge base now this can have plenty
of use cases this could very simply be a
customer facing chatbot that can answer
questions about our business or we can
use it internally to answer questions
related to our company's data and
dealing with custom knowledge bases is
one of flow wise's strengths let's start
by adding a new chat flow and let's call
this customer support agent in this
example I want this agent to be able to
answer client's questions related to my
fictitious restaurant called the Oak and
Barrel I've simply created this word
document containing all the common
questions and answers related to my
restaurant things like contact
information the current specials Etc I
also cre the CSV document containing all
the menu items along with their prices
so what we want to build here is an
agent that has access to these custom
documents and what we could do then is
simply grab this code snippet and embed
it into our website and our customers
can then interact with this chat bot by
clicking on this chat window and then
asking questions about our business that
means we have a customer support agent
that's available 24/7 let's start by
adding a new node let's add an agent
node and more specifically We'll add the
tool agent as with the previous video
we'll simply add our chat model and for
this I'll add the chat open AI model
like so let's select our credentials for
the model I'll actually just leave it on
GPT 40 Mini and for the temperature I'll
lower this to 0.6 let's also add memory
as we want our clients to have full
conversations with this agent so under
memory let's add the buffer window
memory node we can attach it to our
agent let's change the size to 20 let's
change the system prompt off this tool
agent by clicking on additional
parameters and let's change this to roll
and let's say your name is Max you are a
customer support agent for a restaurant
called Oak and Barrel keep your answers
precise and use the knowledge base to
answer questions about the restaurant
that's all we need for now now let's set
up our knowledge base let's go back to
the dashboard and let's go to document
stores we can use document stores to
effectively create custom knowledge
bases this is a fantastic solution
because we can create a document store
over here and these document stores will
be accessible to any of our chat flows
let's create a new document store let's
call this Oak and Barrel let's add this
let's open this document store and let's
start attaching our knowledge sources by
clicking on ADD document loader here we
have integration with a lot of different
applications and we can upload things
like CSV files we can use the cherio web
scraper to extract information from
websites but what I need is the doc x
file loader so I'll upload my file and
by the way all of the files will be
available in the link in the description
now if I click on preview chunks this
will return all the contents in the
document within a single chunk which is
not ideal as an example let's say the
customer ask what the current specials
are we don't want to inject all of this
content into the prompt when asking
about specials instead we only want to
retrieve the most relevant text related
to the specials and inject that into the
prom so what we can do in instead is
split this document up into smaller
chunks we can do that by going to the
text splitter and let's select the
recursive character text splitter I'll
leave the chunk size on 1,000 characters
with the chunk overlap of 200 now watch
what happens when we click on preview
now we've split this document into five
smaller chunks let's click on process
then let's add one more additional
loader this time I'm going to use the
CSV file loader to upload our menu items
for CSV doc docents we actually don't
have to specify a text splitter as each
row in the document will become its own
chunk so here we can see the fillet
steak the rip eye Stakes T-Bones sirloin
Stakes Etc let's click on process and
now we have these two documents loaded
into our document store we're not done
yet though we've simply prepared this
data at this stage and now the next step
is to upsert this data into a database
so what we can do is go to more actions
let's click click on upsert all chunks
and now we have to configure this
document store so we have to set things
like the embeddings we have to specify a
vector store and optionally we can
specify a record manager let's start
with the embeddings embeddings will
simply take the text from the documents
and convert it into vectors it's a
little bit technical to explain in this
video but the Step is necessary in order
for the vector store to figure out what
the most relevant document to the user's
question is so as the provider I'm going
to use open AI so I'll select my
credentials for the model name I'm going
to select text embedding three small we
don't have to change any of these
settings the text from the documents
along with these embeddings will be
stored in a database called a vector
store so let's click on this and flow
wise as integration with several Vector
store providers we will use pine cone
which is free to use so let's create our
credentials let's give it a name like
pine cone API and for the API key go to
Pine con. I and sign up or log into your
account from here let's create our
database by clicking on create index
give it a name like flow wise then under
Dimensions we can manually enter the
dimensions or select one of these
templates we'll use the text embedding
three small for the capacity mode select
serverless and I'll leave this on AWS
let's click on create index then let's
click on API Keys let's create a new key
let's call this flow wise tutorial let's
create this key let's copy this key and
paste it into flow wise now for the pine
cone index name we can simply give it
the index name which we called flow wise
I do recommend specifying a nam space
because you can reuse the same index for
all of your projects so for the name
space I'll simply call this Oak and
Barrel we don't have to change any other
properties so what we can do now is
click on Save config and upsert we can
now see that 25 documents were added to
our Vector database and if we go back to
Pine Cone and if we click on flow wise
we can indeed see that 25 documents were
added and in the name space we can see
that ok Barrel was indeed created and on
the browser we can indeed view each of
those documents that were up inserted
another great feature about flow wise is
that we can test the retrieval at this
stage by clicking on test retrieval and
let's ask what are the specials and
these are the most relevant documents
that were returned from our pine cone
database and the very first document
very clearly includes the specials we
can also use the screen for fine-tuning
the results so if you find that only
returning four documents is not enough
we can easily change the top K value to
let's say eight documents when we we run
this again we now get eight documents
back from the database and if we feel
that this actually improves the results
we can simply save these config changes
I'll simply change this back to four
let's save the config and let's go back
to our configuration so what I do want
to mention is if you do change any of
this data so let's say we add an
additional document loader you do have
to run the upsert process again but
here's the issue when I click on upsert
although nothing has changed you will
notice that 25 documents were added
again and if I go to our database you
will now notice that we have 50
documents this means that all those
documents were duplicated but this is
not ideal we only want to upsert the new
documents and that is where record
manager comes in the record manager will
keep track of the documents that we've
already upsert it and when we run upsert
again it will compare our existing
documents to the new set of documents
and only insert the difference so to
clear out these existing records in this
database I'm simply going to go to
namespace and I'm going to delete this
Oak and Barrel namespace and that will
delete all the documents linked to it so
now that we have a clean start let's add
a record manager and I highly recommend
using postgress or my SQL for this and I
do have a dedicated video taking you
through the process of setting up a
postest database and using it as a
record manager but to keep things simple
for this tutorial we'll simply add the
SQL light record manager we actually
don't have to change too much I do want
to set the name space to be the same as
the namespace in our pine cone database
and I'll change the cleanup method to
full now let's save this config let's
run upsert and as expected 25 documents
were added and if we run upsert again we
can see that 25 documents were skip this
time if we go back to our document store
we can delete entries as well so let's
delete this CSV file then under actions
let's click on upsert all chunks let's
click on upsert we can see that five
documents were skipped those are the
documents from the Q&A doc but all the
items in the CSV file were actually
deleted so in our Pine database the
amount of documents have been reduced to
five documents I'm just going to add the
CSV file back so I'll click on preview
chunks let's click on process let's run
upsert again our menu items were added
obviously five documents were skipped
great we now have a custom knowledge
base next let's give our customer agent
access to this knowledge base so back in
chat flows let's open up our customer
support agent then under Tools let's add
the retriever tool let's attach this
retriever tool to our agent let's give
our tool a name like Oak and Barrel for
the description let's enter returns
documents related to O barrel and the
menu then then let's go to add nodes and
under Vector stores let's add the
document store node we can attach the
document store to this retriever tool
and from the drop- down let's select o
an Barrel if you do not see your
document store in this list it simply
means the document store has not yet
been upsert it into your database that
should be it let's test this out so in
the chat let's ask what are your current
specials and indeed we get the correct
response back we can also see that the
retriever tool was called and this was
the response from our Vector store in
some instances you might want to site
the sources of this information and show
it to your users what you can do is go
to your retriever tool and enable return
Source documents so now when we ask that
same question we get the source
documents as well along with their
metadata so all that's left now is to
embed this chatbot into our website by
clicking on this button then simply copy
the script and you can add it to any
website simply by pasting in that script
into the body tag and if we have a look
at this simple web page we can view this
chat bubble and we can chat to our chat
bot so let's say hello let's ask what
are the current specials and we get the
correct answer back which we probably
don't want to show in this case I do
want to mention that it is possible to
customize the look and feel of this chat
window and the chat bubble and I have a
complete video going through this
process step by step along with
instructions on embedding this chat part
into different types of websites so
definitely check out that video as well
