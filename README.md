steps

fork the repo to your github account 
clone to your machine
change directory to barcode and
run http server using command
> cd barcode
> python -m SimpleHTTPServer
open in Browser
> http://localhost:8000
Enter the barcode details.
Try modifying the details in the json file.
and see the changes are updted.

When running on codenvy.io, you can use these steps to create a tunnel to connect to the service you are running.

download ngrok and unzip
> curl -o ngrok.zip <url>
> unzip ngrok.zip


Run server on one terminal
> python -m SimpleHTTPServer 

Open new terminal
> ./ngrok http 8000

