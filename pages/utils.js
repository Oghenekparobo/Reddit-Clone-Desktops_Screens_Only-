export default function Utils() {
  const tasks = [
    { task: "generate_users", description: "generate random users" },
    { task: "generate_subreddits", description: "generate random subreddits" },
    { task: "add_fake_content", description: "generate fake contents" },
    { task: "clean_database", description: "clean database" },
  ];


  const Button = ({ task }) => (
    <div className="flex justify-evenly pt-20">
      <button
        className="custom-btn"
        onClick={async () => {
          await fetch("/api/utilities", {
            body: JSON.stringify({
              task: task.task,
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
        }}
      >
        {task.description}
      </button>
    </div>
  );

  return (
    <div>
      <div className="utils bg-blue-300 h-screen">
        <div className="buttons text-center">
          {tasks.map((task, index) => (
            <Button key={index} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}
