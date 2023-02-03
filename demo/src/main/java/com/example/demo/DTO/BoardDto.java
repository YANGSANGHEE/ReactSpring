package com.example.demo.DTO;

import lombok.Getter;
import lombok.Setter;
//Getter Setter
//OOP에서는 메서드를 통해 데이터를 변경하는 방법을 선호함
//Setter : 데이터는 외부에서 접근하지 않도록 막고, 메서드는 공개해서 외부에서 메서드를 통해 데이터에 접근하도록 유도
//Getter : 외부에서 객체의 데이터를 읽을때도 메서드를 사용하는 것이 좋으며 객체 외부에서 객체 필드값을 사용하기 부적절하 경우
//메서드로 필드값을 가공후 외부로 전달
//cf)field : 클래스에 포함된 변수,
@Getter
@Setter
public class BoardDto {
	private int id;
	private String writer;
	private String title;
	private String con;
	private String date;
}

//DTO
//데이터 전송 객체,데이터 전송을 위해 생성되는 객체,"호출" 시스템을 이용
//*DTO 기법을 사용하면 중요한 정보를 노출시키지 않고 두 시스템(API와 서버 등) 간 통신을 원활하게 촉진할 수 있습니다.