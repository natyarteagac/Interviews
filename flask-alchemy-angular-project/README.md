# Setup Instructions

## Prerrequsites

1. Install python3.8.10
2. Install pyenv
3. Install mysql 8.0.27

## Locally
1. In your terminal install python3.8.10 with pyenv
2. Create the new virtual environment.
pyenv virtualenv <nameofenvironment>
3. Activate the enviroment
source <nameofenviroment>/bin/activate --> linux
4. Clone the repository
git clone https://github.com/natyarteagac/Interviews.git
5. Install all the dependencies project.
pip install -r requirements.txt
5. Execute mysql database
sudo service mysql start --> linux
6. Execute command line to get into mysql
sudo mysql -uroot -proot
6. Execute the API in the local machine.
python3 ./index.py
7. Execute the Angular User view
ng start ./book-UI
