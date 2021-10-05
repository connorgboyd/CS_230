

export interface UserInfo{
    FirstName: string;
    LastName: string;
    Github: string;
    mix_id: string;
}
export interface CompleteResponse{
    ["my-info"]: UserInfo;

}