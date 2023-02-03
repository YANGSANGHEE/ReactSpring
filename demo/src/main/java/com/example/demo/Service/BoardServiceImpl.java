package com.example.demo.Service;

import com.example.demo.DTO.BoardDto;
import com.example.demo.DAO.BoardDao;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;

@Service
//서비스 레이어 내부에서 자바로직을 처리
//cf)Repository : DB나 파일같은 외부 I/O(입출력) 작업을 처리 / 퍼시스턴스 레이어 : DB와 연결하는 부분(영속성을가짐)
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {
	//구현할 인터페이스를 불러오기 위한 키워드
	//자바는 다중 상속을 지원해 주지않지만 implements를 통해 다중 상속
	private final BoardDao boardDao;
	
	@Override
	//상속의 관계에 있는 클래스간의 하위 클래스가 상위 클래스와 완전 동일한 메서드를 덮어쓴다는 의미
	//이름만 같을 뿐 상속 클래스의 메서드랑 다른 메서드임
	public List<BoardDto> getBoardList(){
		return boardDao.getBoardList();
	}

	@Override
	public String Boardinsert(Map<String, String> params) {
		int result = boardDao.Boardinsert(params);
		if(result != 0 ) {
			return result + "";
		}else {
			return result + "";
		}
	}
	
	@Override
	public BoardDto BoardGet(Map<String,String> params) {
		return boardDao.BoardGet(params);
	}
	
	@Override
	public String BoardDelete(Map<String,String> params) {
		int result = boardDao.BoardDelete(params);
		if(result != 0) {
			return result + "";
		}else {
			return result + ""; 
		}
	}
	
	@Override
	public String BoardUpdate(Map<String,String> params) {
		int result = boardDao.BoardUpdate(params);
		if(result != 0) {
			return result + "";
		}else {
			return result + ""; 
		}
	}
	
}

//상태코드 양식
//{
//	code : "F-1"
//	msg : "데이터 불러옴",
//	data : [
//		 
//	 ]
//}