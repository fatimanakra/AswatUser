export interface Post {
  typeName: string;
processedImg: any;
    type: string;
    byteImg(byteImg: any): unknown;
    id: number;
    name: string;
    content: string;
    text: string;

    postedBy: string;
    date: Date;
    categoryId: number; // Changez le type si nécessaire
    img: string; // Si l'image est stockée sous forme de chaîne Base64
    picPath: string;
    approved: boolean;
    posted: boolean;
    archived: boolean;
  }
  