import {
  FaBriefcase,
  FaUserTie,
  FaMoneyBill,
  FaChartLine,
  FaClipboardList,
  FaCheck,
  FaUtensils,
  FaCoffee,
  FaPizzaSlice,
  FaShoppingCart,
  FaCar,
  FaHome,
  FaPlane,
  FaHospital,
  FaGraduationCap,
  FaMusic,
  FaBook,
  FaCamera,
  FaPaintBrush,
  FaGamepad,
} from 'react-icons/fa';
import { IoIosBriefcase, IoIosPaper, IoIosStats, IoIosRestaurant, IoIosSubway } from 'react-icons/io';
import { MdWork, MdBusinessCenter, MdAssignment, MdLocalCafe, MdLocalPizza, MdLocalShipping, MdLocalGroceryStore, MdHotel, MdSchool, MdMusicNote, MdLocalLibrary, MdPhotoCamera, MdBrush, MdVideogameAsset } from 'react-icons/md';

const WorkIcons = [
  // Trabalho
  { nome: 'Maleta', Icon: FaBriefcase },
  { nome: 'Gravata', Icon: FaUserTie },
  { nome: 'Dinheiro', Icon: FaMoneyBill },
  { nome: 'Gráfico', Icon: FaChartLine },
  { nome: 'Lista de Tarefas', Icon: FaClipboardList },
  { nome: 'Maleta', Icon: IoIosBriefcase },
  { nome: 'Papel', Icon: IoIosPaper },
  { nome: 'Estatísticas', Icon: IoIosStats },
  { nome: 'Trabalho', Icon: MdWork },
  // Comida
  { nome: 'Utensílios', Icon: FaUtensils },
  { nome: 'Café', Icon: FaCoffee },
  { nome: 'Fatia de Pizza', Icon: FaPizzaSlice },
  { nome: 'Restaurante', Icon: IoIosRestaurant },
  { nome: 'Café', Icon: MdLocalCafe },
  { nome: 'Pizza', Icon: MdLocalPizza },
  // Serviço
  { nome: 'Carrinho de Compras', Icon: FaShoppingCart },
  { nome: 'Carro', Icon: FaCar },
  { nome: 'Casa', Icon: FaHome },
  { nome: 'Avião', Icon: FaPlane },
  { nome: 'Hospital', Icon: FaHospital },
  { nome: 'Entrega', Icon: MdLocalShipping },
  { nome: 'Mercado', Icon: MdLocalGroceryStore },
  { nome: 'Hotel', Icon: MdHotel },
  // Diversos
  { nome: 'Tarefa', Icon: MdAssignment },
  { nome: 'Check', Icon: FaCheck },
  { nome: 'Formatura', Icon: FaGraduationCap },
  { nome: 'Música', Icon: FaMusic },
{ nome: 'Livro', Icon: FaBook },
{ nome: 'Câmera', Icon: FaCamera },
{ nome: 'Câmera', Icon: MdPhotoCamera },
{ nome: 'Pincel', Icon: FaPaintBrush },
{ nome: 'Pincel', Icon: MdBrush },
{ nome: 'Controle de Jogo', Icon: FaGamepad },
{ nome: 'Controle de Jogo', Icon: MdVideogameAsset },
{ nome: 'Nota Musical', Icon: MdMusicNote },
{ nome: 'Biblioteca', Icon: MdLocalLibrary },
];

export default WorkIcons;