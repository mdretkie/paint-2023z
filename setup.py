from setuptools import setup

setup(
    name="paint", 
    package_dir={
        "paint.server": "server",
    }, 
    install_requires=[
        "flask",
        "flask-cors",
        "lask_jwt_extended",
        "flask_sqlalchemy",
    ],
)
