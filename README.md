# yuma-cafe
An API for a cafe shop to access menu items, customer reviews and customer menu requests.
# Live APP
[Demo](https://ycafe-e3354edf270c.herokuapp.com/)

# USE
You can create and view Users, User Reviews and User menu requests.

# USER
/GET/https://ycafe-e3354edf270c.herokuapp.com/api/user
To see all Users.
/GET/https://ycafe-e3354edf270c.herokuapp.com/api/user/"user_id"
To find one user by id.
/POST/https://ycafe-e3354edf270c.herokuapp.com/api/user
To create a new user.
/POST/https://ycafe-e3354edf270c.herokuapp.com/api/user/login
To login as a user, may also get redirected here if session expires.
/POST/https://ycafe-e3354edf270c.herokuapp.com/api/user/logout
To logout as a user.

# MENU
/GET/https://ycafe-e3354edf270c.herokuapp.com/

# REVIEWS
/GET/https://ycafe-e3354edf270c.herokuapp.com/api/review
To see all Reviews
/GET/https://ycafe-e3354edf270c.herokuapp.com/api/review/"review_id"
To find a review by id.
/POST/https://ycafe-e3354edf270c.herokuapp.com/api/review
To Create a new review. Must pass in a JSON obj with the attributes item_id = Integer, text = string and optional user_id: integer.

# REQUESTS
/GET/https://ycafe-e3354edf270c.herokuapp.com/api/request
To see all Requests.
/GET/https://ycafe-e3354edf270c.herokuapp.com/api/request/"request_id"
To find a request by id.
/POST/https://ycafe-e3354edf270c.herokuapp.com/api/request
To Create a new menu request. Must pass in a JSON obj with the attributes food_name = Integer, text = string and optional user_id: integer.

## FUTURE DEV
In the future it would be great to add a front end for users to interact with the server without using a tool like insomnia. I would also like to implement a new technology like Amazon S3 Buckets to store server images on the cloud. 

## CHALLENGES
I wanted the user_id attribute for the models to be automagically what the user's id is when creating a new review or request.
Havent fixed that yet.
