# web-crawler

plans by phases:

1. get the arguments from cli
2. make sure the number of arguments is valid
3. check the validity of url and the depth in order to start scanning
4. implements writing values from a demo-array to results.json file.
5. consideration of how to approach to it with asynchronous approach
6. impelement scanning for depth 1 and store it in results.json
7. implement the scanning recursivley by given depth

8. if there is time left => check edges use-cases.
9. writing my thoughts about my approach to this exercise - JS way vs Angular way

### My thoughts - half an hour before deadline:

I did not suffice to implements the core logic of the exercise,
during the exercise time I divide the exercise to 7 steps which I implement 4/7 of them.

My plan-action was to work with the "wrapper" of this ex., most of my experience is to develope a
webpage with angular framwork and with that I did not know how to handle with arguments via cli instead of user click actions from a bulidup webpage.

I solve this by searching and research the internet and dismantle this ex. to a bullets mini-problems.

when I get to solve the core logic problem,

### I understand that I will not suffice to finish this ex with the 3 hours of time-limit

and instead I write here my

### way-to-action

in order to complete this with an extra time.

The obstacle I have faced with is how to implements with JS the way I should handle with HTTP requests.
in Angular I can use its power of HTTPCLIENT library and the power of obserbable/operator in order to get
the data asynchronous way.

I did not have the experience to do it only using JS with nodeJS (in my service I worked in Angular etc),
and did not know how to implements such a problem using angular framwork (when the arguments came from cli and not by user actions via the web itself).

### With all of that thoughts, as I see it the way I was handle with the rest of the exercise by the approach of using JS with nodeJS without Angular:

#the action is to send an http get request for the site assets, parse it to HTML data and extract from it the relevant <img> tags and <a> links.
after that I use 'route' in while loop untill the depth is done to lower the dom tree with the required level, and execute
the same logic of parsing the <img> and the <a> as long as depth is not 0.

all of that I will push to obj I have created and them eventually write the data to resultes.json.

1. building a node-js environment which I can run a server(using npm i and npm init for starting a new whole projects)
2. import axios and cheerio in order to handle:
   axios - http requests
   cheerio - parsing html in node.js
3. sending get request for getting the data of the webpage.
4. parse the <img> and the <a> from the raw data of the html file
5. for each <img> the code will enter its logics to obj
6. after the whole level is done I crawel the next level\*
   - I read that there is a way to run it parrelar in order to make optimizations of the programe, should read about it too.

Anyway, I was enjoyed to deal with something I didnot face before it and will continue to solve this problem today,
I will update the commits in github.
I also want to see if I could solve it by using angular (my home playground) and not learning by the way using libraries of Node.js

thank your for your time to read it!

Bar Peretz

### update

now the program can get the img data and the links, but when depth > 1 the results.json will be written only after the programe will finsh to run all over the links which can take a times (more then 5 minutes at least)
