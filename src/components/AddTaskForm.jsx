const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return(
      <>
        {/* Add Task */}
        <div className="row">
          <div className="col">
            <input 
              value={newTask}
              onChange={ (e) => setNewTask(e.target.value)}
              className="form-control form-control-lg" placeholder="Add a new task"
            />
          </div>
          <div className="col-auto">
            <button
              onClick={addTask}
              class="btn btn-lg btn-outline-primary"
            >Add Task</button>
          </div>
        </div>
        <br />
      </>
    )
  }
  
  export default AddTaskForm;