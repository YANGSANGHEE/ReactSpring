package com.example.demo.DAO;

import com.example.demo.DTO.BoardDto;
import org.apache.ibatis.annotations.Mapper;
//sql 결과를 정의해놓은 모델로 매핑하기 위한 이름 그대로의 매퍼
//인터페이스를 매퍼로 등록하기 위해 사용
import java.util.List;
import java.util.Map;

@Mapper
public interface BoardDao {
	List<BoardDto> getBoardList();
	//단순 조회용 전체 row리스트를 가져옴
	int Boardinsert(Map<String, String> params);
	BoardDto BoardGet(Map<String, String> params);
	//POST로 받은 데이터를 DB에서 WHERE문으로 조회 후 해당 id에 해당하는 정보를 가져오기위함
	int BoardDelete(Map<String,String> params);
	int BoardUpdate(Map<String,String> params);
	//insert,delete,update는 row의 변동사항이 있을 수 있기때문에
	//타입을 int로 지정 (row가 1줄이 될 수 있고 두줄이 될 수 있음)
}

//DAO
//데이터베이스의 data에 접근하기 위한 객체
//DataBase에 접근 하기 위한 로직 & 비지니스 로직을 분리하기 위해 사용
//DB를 사용해 데이터를 조회하거나 조작하는 기능을 전담하도록 만든 오브젝트