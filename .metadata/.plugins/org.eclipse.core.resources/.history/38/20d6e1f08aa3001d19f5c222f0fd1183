package com.example.demo.Controller;
//패키지 경로

import java.util.List;
//인터페이스 클래스 => java.util.Collection 인터페이스 구현
//인터페이스 클래스들이 필수로 구현해야하는 추상 자료형 => 객체의 사용방법을 가이드라인 하는것
import java.util.Map;
//객체 프로퍼티의 KEY와 KEYVALUE를 매핑하는객체
//동일한 키를 두개이상 등록 할 수없다 = 키 중복 하면 안됨!

import org.springframework.web.bind.annotation.RequestBody;
//클라이언트에서 오는 데이터를 받고 보내는 Body (req온 데이터를 담는 바디)
import org.springframework.web.bind.annotation.RequestMapping;
//클라이언트에서 오는 요청을 처리하기 위한 api url을 매핑할때 쓰는 오너테이션
//@GetMapping , @PostMapping으로 어노테이션 가능
//cf ) @RequestParam : 	Controller 메소드의 파라미터와 웹요청 파라미터와 맵핑하기 위한 어노테이션(받는 데이터의 타입을 지정해주고 데이터 일치 여부를 boolean으로 값을 반환)
import org.springframework.web.bind.annotation.RequestMethod;
//요청 방식(GET, POST, DELETE, PATCH) 설정
import org.springframework.web.bind.annotation.RestController;
//RESTFUL 한 웹 서비스를 구축하게위해 사용하는 컨트롤러
//Controller : 화면과 로직을 연결시켜주는 라우팅 역할을 함 / 사용자가 화면단에서 어떤 이벤트를 했을경우 화면이나 비즈니스 로직이 실행할 수 있도록 업데이트 역할을 함
import com.example.demo.DTO.BoardDto;
import com.example.demo.Service.BoardService;
import lombok.RequiredArgsConstructor;
//어노테이션 : 주석이지만 주석과 차이가 있음 => 비즈니스 로직에는 영향을 주지 않지만
//연결 방법이나 소스 코드의 구조를 변경할 수 있음.
//관심 지향 프로그래밍(핵심관심사항과 전체에 적용되는 공통관심사항을 기준으로 프로그래밍함으로써
//공통모듈을 여러 코드에 쉽게 적용할 수 있 도록 지원하는 기술)을 쉽게 관리

@RestController
@RequiredArgsConstructor
public class BoardController {
	//Class : 객체를 정의하는 틀 또는 설계도 (js class랑 비슷한 느낌인듯 인스턴스 생성기?)
	//instance : 클래스로부터 객체를 선언하는 과정 => 하나의 클래스로 부터 여러개의 인스턴스를 생성할 수 있음.
	//인스턴스는 독립된 메모리 공간이 생김! 
	private final BoardService boardService;
	//final : 오직 한번만 할당 할 수 있는 엔티티 정의할 때 사용
	//cf : Static : 변수나 함수에 붙는 키워드 , 메모리에 딱 하번만 할당되어 메모리를 효율적으로사용(주소값 공유)
	//-멤버
	//private : Class 외부에서 접근할 수 없는 변수 (클래스 블록 안에서만) / 값을 대입하기 위해서는 public으로 제공되는 Set 함수를 사용해야함
	//public : Class 외부에서 접근할 수 있는 변수
	
	@RequestMapping(value = "/api/board", method = RequestMethod.GET)
	//api url 지정 후 해당 url로 get 요청을 받음
	public List<BoardDto> getBoard(){
		//getBoard()라는 함수가 호출 될 시 BoardDTO 라는 데이터 객체 리스트를 리턴 받겠음.
		//리스트인 이유 => 스키마 테이블 전체 row를 가져오기 때문
		return boardService.getBoardList();
	}
	
	@RequestMapping(value="/api/posting", method = RequestMethod.POST)
	//api url 지정 후 해당 url로 Post 요청을 받음
	public String Boardinsert(@RequestBody Map<String, String> params){
		//Boardinsert라는 함수가 호출될 시 클라이언트에서 {String:String}형식의 데이터를 받아
		//params라는 매개변수로 받음(리턴값은 String)
		return boardService.Boardinsert(params);
	}
	
	@RequestMapping(value="/api/getboard", method = RequestMethod.POST)
	//api url 지정 후 해당 url로 Post 요청을 받음
	public BoardDto BoardGet(@RequestBody Map<String,String> params) {
		//BoardGet라는 함수가 호출될 시 클라이언트에서 {String:String}형식의 데이터를 받아
		//params라는 매개변수로 받음(리턴값은 BoardDto 객체)
		return boardService.BoardGet(params);
	}
	@RequestMapping(value="/api/delboard", method = RequestMethod.POST)
	//api url 지정 후 해당 url로 Post 요청을 받음
	public String BoardDelete(@RequestBody Map<String,String> params) {
		//BoardDelete라는 함수가 호출될 시 클라이언트에서 {String:String}형식의 데이터를 받아
		//params라는 매개변수로 받음(리턴값은 String object?)
		return boardService.BoardDelete(params);
	}
	@RequestMapping(value="/api/upboard", method = RequestMethod.POST)
	//api url 지정 후 해당 url로 Post 요청을 받음
	public String BoardUpdate(@RequestBody Map<String,String> params) {
		//BoardUpdate라는 함수가 호출될 시 클라이언트에서 {String:String}형식의 데이터를 받아
		//params라는 매개변수로 받음(리턴값은 String object?)
		return boardService.BoardUpdate(params);
	}
}
