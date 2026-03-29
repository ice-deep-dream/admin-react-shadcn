import { useTranslation } from 'react-i18next'
import { MoreVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import { type Task } from '../data/schema'
import { priorities, statuses } from '../data/data'

interface TasksCardViewProps {
  tasks: Task[]
  onEdit: (task: Task) => void
  onDelete: (task: Task) => void
}

export function TasksCardView({ tasks, onEdit, onDelete }: TasksCardViewProps) {
  const { t } = useTranslation()

  const getPriorityIcon = (priority: Task['priority']) => {
    const priorityItem = priorities.find((p) => p.value === priority)
    const IconComponent = priorityItem?.icon
    return IconComponent ? <IconComponent className="h-3 w-3" /> : null
  }

  const getStatusIcon = (status: Task['status']) => {
    const statusItem = statuses.find((s) => s.value === status)
    const IconComponent = statusItem?.icon
    return IconComponent ? <IconComponent className="h-3 w-3" /> : null
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
      {tasks.map((task) => (
        <Card key={task.id} className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 space-y-2">
              {/* Title and Status */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold leading-none tracking-tight">
                  {task.title}
                </h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onEdit(task)}>
                      {t('common.edit')}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-destructive"
                      onClick={() => onDelete(task)}
                    >
                      {t('common.delete')}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Description */}
              {task.description && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {task.description}
                </p>
              )}

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="gap-1">
                  {getPriorityIcon(task.priority)}
                  <span className="hidden xs:inline">
                    {t(`tasks.taskPriority${task.priority}`)}
                  </span>
                </Badge>
                <Badge variant="outline" className="gap-1">
                  {getStatusIcon(task.status)}
                  <span className="hidden xs:inline">
                    {t(`tasks.taskStatus${task.status}`)}
                  </span>
                </Badge>
              </div>

              {/* Footer Info */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                {task.assignee && (
                  <div className="flex items-center gap-1">
                    <span>{t('tasks.taskAssignee')}:</span>
                    <span className="font-medium">{task.assignee}</span>
                  </div>
                )}
                {task.dueDate && (
                  <div className="flex items-center gap-1">
                    <span>{t('tasks.taskDueDate')}:</span>
                    <span className="font-medium">
                      {new Date(task.dueDate).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
