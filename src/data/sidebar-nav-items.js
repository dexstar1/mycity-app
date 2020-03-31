export default function() {
  return [
    {
      title: "Add/Update Member",
      to: "/Home",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "3 Touch Program",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/#",
    },
    {
      title: "Articles",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/#",
    },
    {
      title: "Survey/Reviews",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/#",
    },
    {
      title: "Marketing",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/#",
    },
    {
      title: "Reminders",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/#",
    },
    {
      title: "Tools",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/#",
    }
  ];
}
