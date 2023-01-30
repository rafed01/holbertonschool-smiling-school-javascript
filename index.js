const a = async () => {
    const b = await fetch("https://smileschool-api.hbtn.info/courses")
	console.log(await b.json())
}
a();
