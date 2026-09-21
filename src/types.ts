export interface ServiceTab {
  id: string;
  label: string;
  columns: [
    {
      title: string;
      items: string[];
    },
    {
      title: string;
      items: string[];
    }
  ];
}

export interface Partner {
  name: string;
  role: string;
}
