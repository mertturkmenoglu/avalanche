interface SidebarItem {
  link: string
  name: string
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}

export default SidebarItem