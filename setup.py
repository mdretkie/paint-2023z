from setuptools import setup

setup(
    name="paint", 
    package_dir={
        "paint.server": "server",
    }, 
    install_requires=[
        "flask",
        "flask-cors",
    ],
)
