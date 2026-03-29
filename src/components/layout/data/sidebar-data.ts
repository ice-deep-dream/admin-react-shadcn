import {
  Construction,
  LayoutDashboard,
  Monitor,
  Bug,
  ListTodo,
  FileX,
  Lock,
  Bell,
  Package,
  Palette,
  ServerOff,
  Wrench,
  UserCog,
  UserX,
  Users,
  MessagesSquare,
  ShieldCheck,
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Columns,
  Sliders,
  Cog,
  LifeBuoy,
  Search,
  Layers,
  List,
  PanelTop,
} from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'User Name',
    email: 'user@example.com',
    avatar: 'https://github.com/shadcn.png',
  },
  teams: [
    {
      name: 'Shadcn Admin',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navGroups: [
    {
      title: 'common.general',
      items: [
        {
          title: 'common.dashboard',
          url: '/dashboard',
          icon: LayoutDashboard,
        },
        {
          title: 'common.tasks',
          url: '/tasks',
          icon: ListTodo,
        },
        {
          title: 'common.apps',
          url: '/apps',
          icon: Package,
        },
        {
          title: 'common.chats',
          url: '/chats',
          badge: '3',
          icon: MessagesSquare,
        },
        {
          title: 'common.users',
          url: '/users',
          icon: Users,
        },
      ],
    },
    {
      title: 'common.pages',
      items: [
        {
          title: 'common.authPages',
          icon: ShieldCheck,
          items: [
            {
              title: 'common.signIn',
              url: '/sign-in',
            },
            {
              title: 'common.signIn2',
              url: '/sign-in-2',
            },
            {
              title: 'common.signUp',
              url: '/sign-up',
            },
            {
              title: 'common.forgotPassword',
              url: '/forgot-password',
            },
            {
              title: 'common.otp',
              url: '/otp',
            },
          ],
        },
        {
          title: 'common.errorsPages',
          icon: Bug,
          items: [
            {
              title: 'common.unauthorized',
              url: '/errors/unauthorized',
              icon: Lock,
            },
            {
              title: 'common.forbidden',
              url: '/errors/forbidden',
              icon: UserX,
            },
            {
              title: 'common.notFound',
              url: '/errors/not-found',
              icon: FileX,
            },
            {
              title: 'common.internalServerError',
              url: '/errors/internal-server-error',
              icon: ServerOff,
            },
            {
              title: 'common.maintenanceError',
              url: '/errors/maintenance-error',
              icon: Construction,
            },
          ],
        },
      ],
    },
    {
      title: 'common.templates',
      items: [
        {
          title: 'common.templates',
          url: '/templates',
          icon: Palette,
        },
        {
          title: 'templates.layouts',
          icon: Layers,
          items: [
            {
              title: 'templates.standardLayout',
              url: '/templates/layout/standard-layout',
              icon: LayoutDashboard,
            },
            {
              title: 'templates.standardListLayout',
              url: '/templates/layout/standard-list-layout',
              icon: List,
            },
            {
              title: 'templates.topNavLayout',
              url: '/templates/layout/top-nav-layout',
              icon: PanelTop,
            },
            {
              title: 'templates.tabLayout',
              url: '/templates/layout/tab-layout',
              icon: Columns,
            },
          ],
        },
        {
          title: 'templates.components',
          icon: Sliders,
          items: [
            {
              title: 'templates.basicComponents',
              url: '/templates/components/basic-components',
              icon: Palette,
            },
            {
              title: 'templates.userSearch',
              url: '/templates/components/user-search',
              icon: Search,
            },
          ],
        },
      ],
    },
    {
      title: 'common.other',
      items: [
        {
          title: 'common.settings',
          icon: Cog,
          items: [
            {
              title: 'common.profile',
              url: '/settings',
              icon: UserCog,
            },
            {
              title: 'common.account',
              url: '/settings/account',
              icon: Wrench,
            },
            {
              title: 'common.appearance',
              url: '/settings/appearance',
              icon: Palette,
            },
            {
              title: 'common.notifications',
              url: '/settings/notifications',
              icon: Bell,
            },
            {
              title: 'common.display',
              url: '/settings/display',
              icon: Monitor,
            },
          ],
        },
        {
          title: 'common.helpCenter',
          url: '/help-center',
          icon: LifeBuoy,
        },
      ],
    },
  ],
}
