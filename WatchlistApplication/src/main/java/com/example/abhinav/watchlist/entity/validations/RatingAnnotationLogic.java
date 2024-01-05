package com.example.abhinav.watchlist.entity.validations;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class RatingAnnotationLogic implements ConstraintValidator<Rating, Float>{

	@Override
	public boolean isValid(Float value, ConstraintValidatorContext context) {
		// TODO Auto-generated method stub
		return value > 5 && value <= 10;
	}

}
