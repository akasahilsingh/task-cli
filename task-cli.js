const fs = require("node:fs");

const FILE = "task.json";

const taskContent = process.argv.slice(3).join(" ");
let tasks = [];
if (process.argv[2] === "add" && taskContent) {
  if (fs.existsSync(FILE)) {
    const data = fs.readFileSync(FILE, "utf-8");
    tasks = data.trim() ? JSON.parse(data) : [];
  }

  tasks.push({
    id: tasks.length + 1,
    task: taskContent,
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  fs.writeFile(FILE, JSON.stringify(tasks, null, 2), (error) => {
    if (error) throw error;
    console.log(`Task added successfully (ID: ${tasks[tasks.length - 1].id})`);
  });
}

if (process.argv[2] === "list") {
  // fs.readFile(FILE, "utf-8", (error, data) => {
  //   if (error) throw error;
  //   console.log(data);
  // });
  const allTasks = fs.readFileSync(FILE);
  console.log(JSON.parse(allTasks));
  console.log("All tasks listed");
}

const upadateId = process.argv[3];
const updateDesc = process.argv.slice(4).join(" ");
if (process.argv[2] === "update" && upadateId) {
  const data = JSON.parse(fs.readFileSync(FILE));
  // console.log(data)
  try {
    const foundIdData = data.find((id) => id.id === Number(upadateId));
    console.log(foundIdData)
    foundIdData.task = updateDesc;
    foundIdData.updatedAt = new Date().toISOString();
    console.log(foundIdData)
    
    fs.writeFile(FILE, JSON.stringify(data, null, 2), (error, data) => {
      if (error) throw error;
      console.log(`id ${upadateId} task is updated successfully`);
    });
  } catch (error) {
    console.error(error.message);
  }
}
