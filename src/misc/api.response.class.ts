export class ApiResponse{
    status: string;
    errorCode: number;
    message : string | null ;

    constructor(status: string , errorCode: number, message: string | null = null){
        this.status = status;
        this.errorCode = errorCode;
        this.message = message;
    }

}