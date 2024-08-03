import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import IndexPaper1 from "../pages/paper1";
import Paper1Part1 from "../pages/paper1/part1/part1";
import Paper1Part2 from "../pages/paper1/part2/part2";
import Paper1Part3 from "../pages/paper1/part3/part3";
import Paper1Part4 from "../pages/paper1/part4/part4";
import Paper1Part5 from "../pages/paper1/part5/part5";
import Paper1Part6 from "../pages/paper1/part6/part6";
import Paper1Part7 from "../pages/paper1/part7/part7";
import Paper1Part8 from "../pages/paper1/part8/part8";
import Paper1Part9 from "../pages/paper1/part9/part9";
import Paper1Part10 from "../pages/paper1/part10/part10";
import IndexPaper2 from "../pages/paper2";
import Paper2Part1 from "../pages/paper2/part1/part1";
import Paper2Part2 from "../pages/paper2/part2/part2";
import Paper2Part3 from "../pages/paper2/part3/part3";
import Paper2Part4 from "../pages/paper2/part4/part4";
import Paper2Part5 from "../pages/paper2/part5/part5";

//import NoteList from "../component/NoteList";
//import Note from "../component/Note";
//import {LoadDataFolders} from '../utils/folderUtils';
//import {LoadDataNoteByFolderId, LoadDataNoteById} from '../utils/noteUtils';
// const AuthLayout = () => {
//     return <AuthProvider><Outlet /></AuthProvider>
// }

export default createBrowserRouter([
    {
        element: <Home />,
        path: '/'
    },
    {
        element: <IndexPaper1 />,
        path: '/paper1',
        children: [
            {
                default: true,
                element: <Paper1Part1 />,
                path: '/paper1/part1'
            },
            {
                element: <Paper1Part2 />,
                path: '/paper1/part2'
            },
            {
                element: <Paper1Part3 />,
                path: '/paper1/part3'
            },
            {
                element: <Paper1Part4 />,
                path: '/paper1/part4'
            },
            {
                element: <Paper1Part5 />,
                path: '/paper1/part5'
            },
            {
                element: <Paper1Part6 />,
                path: '/paper1/part6'
            },
            {
                element: <Paper1Part7 />,
                path: '/paper1/part7'
            },
            {
                element: <Paper1Part8 />,
                path: '/paper1/part8'
            },
            {
                element: <Paper1Part9/>,
                path: '/paper1/part9'
            },
            {
                element: <Paper1Part10/>,
                path: '/paper1/part10'
            },

        ]

    },
    {
        element: <IndexPaper2 />,
        path: '/paper2',
        children: [
            {
                default: true,
                element: <Paper2Part1 />,
                path: '/paper2/part1'
            },
            {
                default: true,
                element: <Paper2Part2 />,
                path: '/paper2/part2'
            },
            {
                default: true,
                element: <Paper2Part3 />,
                path: '/paper2/part3'
            },
            {
                default: true,
                element: <Paper2Part4 />,
                path: '/paper2/part4'
            },
            {
                default: true,
                element: <Paper2Part5 />,
                path: '/paper2/part5'
            },

        ]
    }

])


