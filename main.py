from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
import uvicorn

host = "127.0.0.1"
port = 4000

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/hello")
async def hello(req: Request):
    # print("connected ok")
    return {"message": "Hello, World!"}
    # return "<h1>ok TH</h2>"

@app.get("/", response_class=HTMLResponse)
async def read_index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request, "title": "Space Bot"})

if __name__ == "__main__":
    uvicorn.run("main:app", host=host, port=port, reload=True)