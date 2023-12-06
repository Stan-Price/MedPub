@extends('layout')

{{-- @section('title', __('titles.home.title'))
@section('description', __('titles.home.description'))
@section('ogTitle' ,__('titles.home.ogTitle'))
@section('ogDescription', __('titles.home.ogDescription'))
@section('ogUrl', __('titles.home.ogUrl'))
@section('mainPopupPayload', 'Главная страница (' . url()->current() . ')') --}}

@section('content')
<main class="page">
	<div class="search-container">
			<div class="search-block ">
				<div class="search-block__line"></div>
				<input type="text" required>
					<label>Введіть текст..</label>
					<div class="search-block__cancel _icon-cancel-circle"></div>					
					
					<div class="search-block__find _icon-search"></div>					
			</div>
	</div>
			<section class="page__main-block main-block">
				<div class="main-block__left left-mainblock">
                    <div class="left-mainblock__content">
					    <h1 class="left-mainblock__title">Ваше тіло та дух тепер під опікою</h1>
					    <div class="left-mainblock__subtitle">Задайте своє питання і ми постараємось вам в цьому допомогти </div>
					</div>
					<video muted autoplay loop>
                        <source src="{{asset('video/Mainvideo.mp4') }}" type="video/mp4">
                    </video>    
                
					<button class="left-mainblock__button ask-button">
                    <span class="ask-button__text">Задати питання</span>
                    <img src="{{asset('img/mainblock/qus__arrow.png') }}" alt="Quesrtion Arrow">
                    </button>
                    
                    
                    
				</div>
				<div class="main-block__right right-mainblock">
                    <video muted autoplay loop>
                        <source src="{{asset('video/Mainvideo.mp4') }}" type="video/mp4">
                    </video>
					<div class="right-mainblock__arrowdown">
						<img src="{{asset('img/mainblock/ArrowsVertical.png') }}" alt="Arrow down">
					</div>
				</div>
			</section>
			<!-- <section class="page__services">

			</section> -->
		</main>


@endsection