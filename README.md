A twitter like application built using django rest framework and react that allows users to perform tweet, like, unlike, follow, register and login actions. The react code is rendered using django static renderer. The docker configuration file that allows us to build a docker image of the application is listed in the repository.

To create a docker image of the application run the below command from the root directory of the application(this requires docker to be installed in the system):<br/>
	docker build -t <image-name> -f Dockerfile .

To run the application from the docker image use the below command:<br/>
	docker run -it -p 8000:8000 <image-name>

Now head to http://localhost/8000 to access the application.
