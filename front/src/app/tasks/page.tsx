"use client";
import useTasksViewModel from "@/viewModels/tasks/tasksViewModels";
import EditTask from "@/components/modals/editTask";
import CreateTask from "@/components/modals/createTask";
import DeleteTask from "@/components/modals/deleteTask";
import TaskListTable from "@/components/tasks/table";
import TaskListHeader from "@/components/tasks/header";
import TaskListNavigation from "@/components/tasks/navigation";

const TaskListPage: React.FC = () => {
  const {
    tasks,
    selectedTask,
    editModalIsOpen,
    createModalIsOpen,
    deleteModalIsOpen,
    openEditModal,
    closeEditModal,
    openCreateModal,
    closeCreateModal,
    openDeleteModal,
    closeDeleteModal,
    deleteTask,
    getPriorityColor,
    getStatusColor,
    updateTaskStatus,
  } = useTasksViewModel();

  return (
    <div className="relative min-h-[100vh] w-full">
      <TaskListHeader />
      <TaskListNavigation />
      <TaskListTable
        tasks={tasks}
        handleOpenCreateModal={openCreateModal}
        openEditModal={openEditModal}
        openDeleteModal={openDeleteModal}
        updateTaskStatus={updateTaskStatus}
        getPriorityColor={getPriorityColor}
        getStatusColor={getStatusColor}
      />
      {editModalIsOpen && <EditTask task={selectedTask!} handleCloseEditModal={closeEditModal} />}
      {createModalIsOpen && <CreateTask handleCloseCreateModal={closeCreateModal} />}
      {deleteModalIsOpen && (
        <DeleteTask task={selectedTask!} handleCloseDeleteModal={closeDeleteModal} handleDeleteTask={deleteTask} />
      )}
    </div>
  );
};

export default TaskListPage;
