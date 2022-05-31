from sys import platform
import os

os.system('cd ./../backend/hasura && docker-compose up -d')

if platform == "linux" or platform == "linux2":
    os.system("xdg-open \"\" http://localhost:8124/")
    os.system("xdg-open \"\" http://localhost:3000/")
elif platform == "darwin":
    os.system("open \"\" http://localhost:8124/")
    os.system("open \"\" http://localhost:3000/")
elif platform == "win32":
    os.system("start \"\" http://localhost:8124/")
    os.system("start \"\" http://localhost:3000/")

os.system('cd ./../frontend/ligenium-report && npm install && npm start')
