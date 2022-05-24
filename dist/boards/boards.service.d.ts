import { BoardReposiory } from "./board.repository";
import { CreateBoardDto } from "./dto/create-board.dto";
import { Board } from "./board.entity";
import { BoardStatus } from "./board-status.enum";
import { User } from "src/auth/user.entity";
export declare class BoardsService {
    private boardRepository;
    constructor(boardRepository: BoardReposiory);
    getAllBoards(): Promise<Board[]>;
    getBoardById(id: number): Promise<Board>;
    createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>;
    deleteBoard(id: number, user: User): Promise<void>;
    updateBoardStatus(id: number, status: BoardStatus): Promise<Board>;
}
