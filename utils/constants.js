const StatusCodes = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500
};

const productAttributes = [
  "id",
  "userId",
  "title",
  "content",
  "status",
  "createdAt",
  "updatedAt"
];

const Status = {
  SELLING: "판매 중",
  SOLD: "판매 완료"
};

const ErrorMessages = {
  MISSING_EMAIL: "이메일 입력이 필요합니다.",
  ALREADY_REGISTERED: "이미 가입 된 이메일입니다.",
  PASSWORD_MISMATCH: "비밀번호가 일치하지 않습니다.",
  INVALID_DATA: "데이터 형식이 올바르지 않습니다.",
  INVALID_STATUS: "상태 값이 잘못되었습니다.",
  USER_NOT_FOUND: "해당 이메일을 가진 사용자를 찾을 수 없습니다.",
  INVALID_PASSWORD: "비밀번호가 일치하지 않습니다.",
  NO_PRODUCT_ACCESS: "해당 상품에 대한 접근 권한이 없습니다.",
  SERVER_ERROR: "서버 내부 오류가 발생하였습니다.",
  MISSING_TOKEN: "헤더에 유효한 토큰이 없습니다.",
  INVALID_USER: "유효한 사용자가 아닙니다.",
  TOKEN_EXPIRED: "토큰의 유효기간이 지났습니다.",
  TOKEN_VERIFICATION_FAILED: "토큰 검증에 실패하였습니다."
};

const SuccessMessages = {
  SIGNUP_SUCCESS: "회원가입에 성공했습니다.",
  PRODUCT_CREATED: "판매 상품을 등록하였습니다.",
  PRODUCT_UPDATED: "상품을 수정하였습니다.",
  PRODUCT_DELETED: "상품을 삭제하였습니다.",
  LOGIN_SUCCESS: "로그인에 성공했습니다."
};

module.exports = {
  StatusCodes,
  productAttributes,
  Status,
  ErrorMessages,
  SuccessMessages
};
